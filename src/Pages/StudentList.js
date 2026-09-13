import StudentCard from "../Components/StudentCard";

const students = [
    {
        id: 1,
        name: "John",
        rollNo: 101
    },
    {
        id: 2,
        name: "Akash",
        rollNo: 102
    },
    {
        id: 3,
        name: "Subash",
        rollNo: 103
    },
    {
        id: 4,
        name: "Santhiya",
        rollNo: 104
    },
    {
        id: 5,
        name: "Naveen",
        rollNo: 105
    },
    {
        id: 6,
        name: "Kumar",
        rollNo: 106
    }
];

function StudentList() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
                <div className="text-center">
                    <p className="text-indigo-600 font-semibold uppercase tracking-wider">Student Management</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">Student List</h1>
                    <p className="text-gray-500 mt-3">Choose your favourite students and manage them easily.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {students.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudentList;