import fakePdf from "/fake.pdf";
import { useContext, useEffect, useState } from "react";
// import { getStudentAssignments } from "../../../utils/helperFuncitons";
import StudentIcon from "../../../components/icons/StudentIcon";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import { getAllAssignments } from "../../../utils/helperFuncitons";

import DashLayout from "../../../components/layout/DashLayout";
import TeacherContext from "../../../context/teacherContext";
import SubmissionCard from "../../../components/cards/SubmissionCard";

export default function Submissions() {
  const teacherContext = useContext(TeacherContext);
  const { classCode, students } = teacherContext;
  const [submissions, setSubmissions] = useState([]);

  const navigate = useNavigate();

  // Filtering the assignment submissions from the student data
  useEffect(() => {
    const allAssignments = students.flatMap((s) => {

      const allStudentAssignments = getAllAssignments(s.classes);
      const filteredAssignments = allStudentAssignments
        .filter((a) => a.submitted)
        .map((a) => {
          return {
            studentId: s.studentId,
            ...a,
          };
        });


      return filteredAssignments;
    });

    //setting the sumbissions state
    setSubmissions(allAssignments);
  }, [students]);

  console.log(submissions);

  return (
    <DashLayout>

      <div className="w-full h-full mt-4 py-4 mx-4 bg-white flex items-center gap-2 bg-card-gradient rounded-t-xl border-b border-b-gray-300">
        <h2 className=" text-green-700 text-xl font-bold">Submissions</h2>
        <StudentIcon />
        <SlRefresh className="ml-auto" size={"25px"} />
        <HiOutlineMagnifyingGlass size={"25px"} />
      </div>

      <section className="mb-20">
        {submissions.map((sub) => {
          return <SubmissionCard key={sub.studentId + sub.name} {...sub} />;
        })}
      </section>
      <button
        onClick={() => navigate("/teacher/profile/premium")}
        className="bg-gold-gradient bg-lg bg-left-top px-3 py-2 shadow-2xl rounded-3xl text-white fixed bottom-20  "
      >
        Get Premium
      </button>
    </DashLayout>
  );
}
