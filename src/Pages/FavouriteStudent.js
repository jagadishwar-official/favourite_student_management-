import { useContext } from "react";
import StudentContext from "../Context/StudentContext";
import FavouriteCard from "../Components/FavouriteCard";

function FavouriteStudents() {
    const { favourites } = useContext(StudentContext);
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-500 text-center">Your Favourite Students</h1>
                <p className="text-gray-500 text-center mt-3"> Students you have added to your favourites</p>

                {favourites.length === 0 ? (
                    <div className="max-w-xl mx-auto mt-12 bg-white rounded-2xl shadow-md p-12 text-center">
                        <h2 className="text-2xl font-bold text-blue-500">
                            No Favourite Students
                        </h2>
                        <p className="text-gray-500 mt-3">
                            No favourite students added yet.
                        </p>
                    </div>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                        {favourites.map((student) => (
                            <FavouriteCard
                                key={student.id}
                                student={student} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default FavouriteStudents;