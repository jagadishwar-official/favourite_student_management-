import { useContext } from "react";
import StudentContext from "../Context/StudentContext";

function FavouriteCard({ student }) {
    const { favourites, setFavourites } = useContext(StudentContext);
    const removeFavourite = () => {
        const updatedFavourites = favourites.filter(
            (item) => item.id !== student.id );
        setFavourites(updatedFavourites);
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800"> {student.name} </h2>
                    <p className="text-gray-500 mt-2"> Roll No: {student.rollNo} </p>
                </div>
            </div>
            <button onClick={removeFavourite}
                className="mt-6 w-full bg-red-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-600 transition" >
                Remove Favourite
            </button>
        </div>
    );
}

export default FavouriteCard;