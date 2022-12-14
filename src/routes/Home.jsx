import { Link } from "react-router-dom";
import { useAppContext } from "../store/Store"

const Home = () => {
    const store = useAppContext();

  return (
    <div>
        {store.items.map((item)=>(
            <div>
                <Link to={"edit/" + item.id}>
                  {item.name}
                </Link>
            </div>
        ))}
  </div>
  )
}

export default Home