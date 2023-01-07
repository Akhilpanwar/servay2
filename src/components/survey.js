import { ImRadioChecked, ImStarEmpty, ImParagraphLeft } from "react-icons/im";
import { MdOutlinePowerInput, MdOutlineComment } from "react-icons/md";
import {
  BsCheck2Square,
  BsFullscreen,
  BsImages,
  BsUiRadiosGrid,
  BsGrid3X3Gap,
  BsCodeSlash,
  BsUiRadios,
} from "react-icons/bs";
import { TbMathFunction, TbSignatureOff } from "react-icons/tb";
import { CgNotes, CgServerless } from "react-icons/cg";
import { IoIosSwitch } from "react-icons/io";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
export const survey = [
  {
    title: "Designer",
    id: 1,
    content: [
      {
        forms: [
          {
            title: "Radio Group",
            icons: <ImRadioChecked />,
            data:[
              {id:1,
                name:"question"

              }
            ]
          },
          {
            title: "Rating",
            icons: <ImStarEmpty />,
          },
          {
            title: "CheckBox",
            icons: <BsCheck2Square />,
          },
          {
            title: "Dropdown",
            icons: <CgNotes />,
          },
          {
            title: "TagBox",
            icons: <CgServerless />,
          },
          {
            title: "Boolean",
            icons: <IoIosSwitch />,
          },
          {
            title: "File",
            icons: <AiOutlineFolderOpen />,
          },
          {
            title: "Ranking",
            icons: <ImParagraphLeft />,
          },
          {
            title: "ImagePicker",
            icons: <BsImages />,
          },
          {
            title: "Single Input",
            icons: <MdOutlinePowerInput />,
          },
          {
            title: "Comment",
            icons: <MdOutlineComment />,
          },

          {
            title: "Multiple Text",
            icons: <BiServer />,
          },

          {
            title: "Panel",
            icons: <BsFullscreen />,
          },

          {
            title: "Dynamic Panel",
            icons: <CiSquarePlus />,
          },

          {
            title: "Single Choice Matrix",
            icons: <BsUiRadiosGrid />,
          },

          {
            title: "Multiple-Choice Matrix",
            icons: <BsGrid3X3Gap />,
          },
          {
            title: "Dynamic Matrix",
            icons: <BsUiRadios />,
          },
          {
            title: "Html",
            icons: <BsCodeSlash />,
          },
          {
            title: "Expression(Read Only)",
            icons: <TbMathFunction />,
          },
          {
            title: "Image",
            icons: <BsImages />,
          },
          {
            title: "Signature Pad",
            icons: <TbSignatureOff />,
          },
        ],
      },
    ],
  },
  { title: "Preview", id: 2, content: [{}] },
  { title: "Logic", id: 3, content: [{}] },
  { title: "JsonEditor", id: 4, content: [{}] },
  { title: "Embeded Survey", id: 5, content: [{}] },
  { title: "Translation", id: 6, content: [{}] },
];
