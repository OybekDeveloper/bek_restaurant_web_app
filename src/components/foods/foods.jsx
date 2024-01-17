import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { foods } from "./foodsData";

const Foods = () => {
  const [menuTitle, setMenuTitle] = useState("");
  const [foodsData, setFoodsData] = useState([]);
  const baseUrl='https://media.istockphoto.com/id/1367855191/fr/vectoriel/galerie-dimages-ic%C3%B4ne-solide.jpg?s=612x612&w=0&k=20&c=6YcYJhK-H6i2wto10SJvSa-Y06TvzpM6aVOvBgUSWdo='
  const { id } = useParams();

  useEffect(() => {
    const newFoodsData = foods.find((item) => item.link === id);

    // setDatas(foods.find((item) => item.link === id));
    if (newFoodsData) {
      setMenuTitle(newFoodsData.title);
      setFoodsData(newFoodsData.props)
    } else {
      setMenuTitle("Menu item not found");
    }
  }, [id]);

  console.log(foodsData);

  return (
    <div>
      <div>
        <p className="text-sm">
          <span className="opacity-70">Menu/</span>
          <span className="font-bold">{menuTitle}</span>
        </p>
      </div>
      {foodsData.map((food) => (
        <div className='flex flex-col mt-[20px]' key={food?.id}>
        <img className='imgMenu rounded-[20px]' src={food?.url ? food?.url : baseUrl} alt={food?.title} />
        <p className='text-sm pt-2 text-[#909398]'>{food?.title}</p>
        <p className='text-xl font-bold text-[#FFD60A]'>{food?.price}</p>
    </div>
      ))}
    </div>
  );
};

export default Foods;
