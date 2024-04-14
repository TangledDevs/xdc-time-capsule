import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const Capsule = () => {
  const capsules = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, qui accusantium rem excepturi nam tempora enim ipsum optio dolorem facere iste error, quos consectetur nihil!",
      dueDate: "21/05/2024",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, qui accusantium rem excepturi nam tempora enim ipsum optio dolorem facere iste error, quos consectetur nihil!",
      dueDate: "23/10/2024",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, qui accusantium rem excepturi nam tempora enim ipsum optio dolorem facere iste error, quos consectetur nihil!",
      dueDate: "15/08/2024",
    },
    {
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, qui accusantium rem excepturi nam tempora enim ipsum optio dolorem facere iste error, quos consectetur nihil!",
      dueDate: "01/10/2024",
    },
    {
      title: "Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, qui accusantium rem excepturi nam tempora enim ipsum optio dolorem facere iste error, quos consectetur nihil!",
      dueDate: "07/09/2024",
    },
    {
      title: "Title 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, qui accusantium rem excepturi nam tempora enim ipsum optio dolorem facere iste error, quos consectetur nihil!",
      dueDate: "15/11/2024",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10">
      {capsules?.map((item, index) => (
        <Card
          key={index}
          className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105"
        >
          <Link to="/">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>{item?.title}</span>
              </CardTitle>
              <CardDescription className="text-base">
                {item?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3">
              <Badge className=" flex flow-row items-center justify-center gap-3 mr-2 py-2 px-4 rounded-lg w-fit text-sm">
                <CalendarDays />
                {item?.dueDate}
              </Badge>
            </CardContent>

            {/* <CardFooter className="justify-between">
            <div>
              <Label>
                By:{" "}
                <span className="text-sm font-normal">
                  Krishna Prasad, Associate Professor
                </span>
              </Label>
            </div>
          </CardFooter> */}
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Capsule;
