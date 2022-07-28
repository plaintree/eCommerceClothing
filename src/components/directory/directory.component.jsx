import { DirectoryContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://images.unsplash.com/photo-1572460737616-866a25d4d61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl:
      "https://images.unsplash.com/photo-1582516465792-cbc64224aa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl:
      "https://images.unsplash.com/photo-1630724725268-8272ac390de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=542&q=80",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
