import { File, Shield, Timer, Calendar, Share } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <File />,
    title: "Media Upload",
    description:
      "Easily upload various types of media including images, audio recordings, videos, and text to create personalized time capsules.",
  },
  {
    icon: <Shield />,
    title: "Secure Blockchain Storage",
    description:
      "Ensure the safety and integrity of your memories with secure storage on the blockchain technology.",
  },
  {
    icon: <Timer />,
    title: "Time Capsule Tokenization",
    description:
      "Tokenize each time capsule with a unique NFT, ensuring authenticity and uniqueness.",
  },
  {
    icon: <Calendar />,
    title: "Scheduled Unlock Dates",
    description:
      "Set specific dates for your time capsules to unlock and reveal your cherished memories.",
  },
  // {
  //   icon: <Share size={24} />,
  //   title: "NFT Transferability",
  //   description:
  //     "Share and gift your time capsule memories by transferring NFTs to friends and family.",
  // },
];

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-10 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Time Capsule Features
          </h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed xl:text-base/relaxed">
            The Time Capsule application introduces innovative features to
            revolutionize memory preservation in the digital era. Discover the
            key functionalities that make Time Capsule a unique platform.
          </p>
        </div>

        <div className="grid gap-10 md:px-28 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="w-full h-full">
              <CardHeader className="flex items-center justify-center">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
