import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { foods } from "./foodsData";
import { FoodsImage } from "./foods-img";

const Foods = () => {
  const [menuTitle, setMenuTitle] = useState("");
  const [foodsData, setFoodsData] = useState([]);
 const { id } = useParams();

  useEffect(() => {
    const newFoodsData = foods.find((item) => item.link === id);

    if (newFoodsData) {
      setMenuTitle(newFoodsData.title);
      setFoodsData(newFoodsData.props)
    } else {
      setMenuTitle("Menu item not found");
    }
  }, [id]);
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
          <FoodsImage src ={food.url} />
          <p className='text-sm pt-2 text-[#909398]'>{food?.title}</p>
          <p className='text-xl font-bold text-[#FFD60A]'>{food?.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Foods;
