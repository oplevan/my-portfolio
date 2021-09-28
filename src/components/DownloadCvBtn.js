import React from "react";
import Link from "@material-ui/core/Link";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import config from "../config.json";

export default function DownloadCvBtn() {
  return (
    <>
      <div className='ribbon'>
        <Link href={config.url.CV} target='_blank' download='avatar.png' className='flex'>
          <span>View my CV</span>
          <CloudDownloadOutlinedIcon />
        </Link>
      </div>
    </>
  );
}
