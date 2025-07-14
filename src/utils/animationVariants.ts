// Variant for the container of the list
export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // This will apply a 0.15s delay between each child's animation
    },
  },
};

// Variant for each individual card in the list
export const cardListItemVariants = {
  hidden: { y: 20, opacity: 0 }, // Start 20px below and faded out
  visible: {
    y: 0,
    opacity: 1,
  },
};
