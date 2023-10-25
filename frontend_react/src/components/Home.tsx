import ListGroup from "./ListGroup";

const Home = () => {
  const cities = ["London", "Berlin", "Tokyo", "New York", "Paris"];
  return (
    <ListGroup
      items={cities}
      heading="Cities"
      onSelectItem={(item) => console.log(item)}
    />
  );
};

export default Home;
