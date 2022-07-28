import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavHandler = () => navigate(route);
  return (
    <DirectoryItemContainer
      onClick={onNavHandler}
      as={motion.div}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      whileHover={{ scale: 1.1 }}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
