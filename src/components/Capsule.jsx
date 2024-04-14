/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

const Capsule = ({ item }) => {
  return (
    <Card className="w-full transition-all duration-500 ease-in-out border shadow-sm h-fit hover:scale-105">
      <CardHeader>
        <CardTitle className="flex items-center">
          <p>Title </p>
          <span>{item?.title}</span>
        </CardTitle>
        {/* <CardDescription className="text-base">
            {item?.description}
          </CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        <p>Due Date</p>
        <Badge className="flex items-center justify-center gap-3 px-4 py-2 mr-2 text-sm rounded-lg  flow-row w-fit">
          <CalendarDays />
          {format(item?.dueDate, "PPP")}
        </Badge>
        <p>Creation Date</p>
        <Badge className="flex items-center justify-center gap-3 px-4 py-2 mr-2 text-sm rounded-lg  flow-row w-fit">
          <CalendarDays />
          {format(item?.creationDate, "PPP")}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default Capsule;
