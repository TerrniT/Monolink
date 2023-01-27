import { useState, useEffect } from "react";
import {
  BsPlus,
  BsSearch,
  BsEyeFill,
  BsBookmarkFill,
  BsFillArrowLeftSquareFill,
  BsPeopleFill,
  BsTerminalFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { AiFillFire, AiFillMessage } from "react-icons/ai";
import { IoMdArrowRoundUp } from "react-icons/io";
import { MdNightlightRound, MdFeedback } from "react-icons/md";
import { FaCog } from "react-icons/fa";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/utils/supabaseClient";
import { LinkDef } from "@/types";
import Card from "@/components/cardlink";
import Modal from "@/components/modal";
import { useModalStore } from "@/store/store";

const data = [
  {
    name: "Discover",
    items: [
      {
        title: "Popular",
        icon: AiFillFire,
      },
      {
        title: "Most Upvoted",
        icon: IoMdArrowRoundUp,
      },
      {
        title: "Best Discussions",
        icon: AiFillMessage,
      },
      {
        title: "Search",
        icon: BsSearch,
      },
    ],
  },
  {
    name: "Manage",
    items: [
      {
        title: "Bookmarks",
        icon: BsBookmarkFill,
      },
      {
        title: "Reading history",
        icon: BsEyeFill,
      },
      {
        title: "Focus Mode",
        icon: MdNightlightRound,
      },
      {
        title: "Customize",
        icon: FaCog,
      },
    ],
  },
];

const datafooter = [
  {
    name: "",
    items: [
      {
        title: "Docs",
        icon: BsBookmarkFill,
      },
      {
        title: "Changelog",
        icon: BsTerminalFill,
      },
      {
        title: "Feedback",
        icon: MdFeedback,
      },
      {
        title: "Invite people",
        icon: BsPeopleFill,
      },
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState(false);
  const [userId, setUserId] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();
  const [links, setLinks] = useState<LinkDef[]>();

  const { setOpen } = useModalStore((state) => ({
    setOpen: state.setOpen,
  }));

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const addNewLink = async () => {
    try {
      if (title && desc && url) {
        const { data, error } = await supabase
          .from("links")
          .insert({
            title: title,
            description: desc,
            url: url,
            user_id: userId,
          })
          .select();
        if (error) throw error;
        console.log("data: ", data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      try {
        if (user) {
          const userLoginId = user.data.user?.id;
          setIsAuth(true);
          setUserId(userLoginId);
        }
      } catch (error) {
        console.log("error on load user", error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const { data, error } = await supabase
          .from("links")
          .select("id, title, description, url")
          .eq("user_id", userId);
        if (error) throw error;
        setLinks(data);
        console.log("data from db: ", data);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (userId) {
      getLinks();
    }
  }, [userId]);

  const showMore = () => {
    controls.start({
      width: "250px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: "125px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTitleText.start({
      opacity: 0,
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <div className="flex min-h-screen bg-black">
      <motion.div
        animate={controls}
        className="max-w-[250px] animate duration-300 border-r-2 border-gray-800  relative flex flex-col py-10 min-h-screen group"
      >
        {active && (
          <div
            className="absolute hidden text-2xl text-white cursor-pointer w-8 h-8 -right-4 top-10 group-hover:block "
            onClick={showLess}
          >
            <BsFillArrowLeftSquareFill className=" text-white " />
          </div>
        )}
        {!active && (
          <BsFillArrowRightSquareFill
            onClick={showMore}
            className="absolute text-2xl text-white cursor-pointer -right-4 top-12"
          />
        )}

        <div className="grow">
          {data.map((group, index) => (
            <div key={index} className="my-2">
              <motion.p
                animate={controlTitleText}
                className="mb-2 ml-4 text-sm font-bold text-gray-500"
              >
                {group.name}
              </motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className="flex px-4 py-1 cursor-pointer">
                  <item.icon className="text-lg text-gray-500" />
                  <motion.p
                    animate={controlText}
                    className="ml-4 text-sm font-bold text-gray-400"
                  >
                    {item.title}
                  </motion.p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          {datafooter.map((group, index) => (
            <div key={index} className="my-2">
              <motion.p
                animate={controlTitleText}
                className="mb-2 ml-4 text-sm font-bold text-gray-500"
              >
                {group.name}
              </motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className="flex px-4 py-1 cursor-pointer">
                  <item.icon className="text-lg text-gray-500" />
                  <motion.p
                    animate={controlText}
                    className="ml-4 text-sm font-bold text-gray-400"
                  >
                    {item.title}
                  </motion.p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="border border-gray-600 rounded-full w-10 h-10 flex items-center justify-center">
            <Image
              src="/monolink.png"
              alt="profile picture"
              width={30}
              height={30}
            />
          </div>
          <div>
            <motion.h1 animate={controlText} className="text-sm font-bold">
              Gleb Kotovsky
            </motion.h1>
            <motion.p
              animate={controlText}
              className="text-xs text-zinc-700 font-medium transition-all duration-150"
            >
              UI/UX Designer
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div className="animate duration-300 flex-1 flex-col bg-zinc-900  min-h-screen ">
        <motion.div className="animate duration-300 flex-1 border-b-2 border-zinc-900 bg-black flex flex-col h-24">
          <Modal />
          {isAuth && (
            <button
              title="Add link"
              onClick={setOpen}
              className="flex items-center justify-center self-end my-auto w-auto px-3 py-2 mr-6 font-bold text-black bg-green-400 rounded-lg"
            >
              <BsPlus className="text-2xl" />
            </button>
          )}
        </motion.div>

        <motion.div className="animate duration-300 flex-1  bg-zinc-900 ">
          <div className="flex p-1 gap-2 flex-wrap w-full">
            {links?.map((link: LinkDef) => (
              <Card
                key={link.id}
                id={link.id}
                title={link.title}
                description={link.description}
                url={link.url}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
