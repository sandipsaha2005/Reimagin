import { Navigate, useNavigate } from "react-router-dom";

export function ThreeDCardDemo(data) {
    const navigate = useNavigate();
    console.log(data);
    const handleNavigate = () => {
      console.log("nav");
      navigate(`/location/${data?.data?._id}`);
    };
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray   w-auto sm:w-[30rem] h-auto  p-6 border gradient-border rounded-lg">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-black-600 dark:text-black "
          >
            {data?.data?.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-black-300"
          >
            {data?.data?.category}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 cursor-pointer">
            <img
              src={data?.data?.images[1]?.url}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              onClick={handleNavigate}
            />
          </CardItem>
          <Box marginTop={3} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography>{data?.data?.city}</Typography>
              <Typography>{data?.data?.country}</Typography>
            </Box>
            <Box>
              <Typography>Price Range: {data?.data?.priceRange}</Typography>
            </Box>
          </Box>
        </CardBody>
      </CardContainer>
    );
  }