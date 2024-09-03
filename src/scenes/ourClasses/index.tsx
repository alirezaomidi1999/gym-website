import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: image1,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: image2,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurCLasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onMouseEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>Our Classes</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              temporibus. Aliquid sequi ex rerum incidunt reiciendis possimus
              magni amet vel eius aliquam quam dolores, omnis, totam suscipit
              voluptatum voluptate dolorem!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name} - ${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurCLasses;
