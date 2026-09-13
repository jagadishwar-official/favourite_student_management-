import { useContext } from "react";
import StudentContext from "../Context/StudentContext";

function StudentCard({ student }) {
    const { favourites, setFavourites } = useContext(StudentContext);

    const isFavourite = favourites.some(
        (item) => item.id === student.id
    );

    const addFavourite = () => {
        if (!isFavourite) {
            setFavourites([...favourites, student]);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

            <h2 className="text-2xl font-bold text-gray-800">
                {student.name}
            </h2>

            <p className="text-gray-500 mt-2">
                Roll No: {student.rollNo}
            </p>

            <button
                onClick={addFavourite}
                disabled={isFavourite}
                className={`mt-6 w-full py-3 px-4 rounded-xl font-semibold transition ${isFavourite
                        ? "bg-green-100 text-green-700 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`} >
                {isFavourite ? "Added to Favourite" : "Add to Favourite"}
            </button>
        </div>
    );
}

export default StudentCard;