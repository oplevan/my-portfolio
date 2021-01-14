import React from 'react';
import Link from '@material-ui/core/Link';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

const DownloadCvBtn = () => {
  return (
    <>
      <div className='ribbon'>
        <Link
          href='https://drive.google.com/file/d/1eTjj7ljjFtpmJBPain_UXaQWQQKUfMO5/view?usp=sharing'
          target='_blank'
          download='avatar.png'
          className='flex'
        >
          <span>View my CV</span>
          <CloudDownloadOutlinedIcon />
        </Link>
      </div>
    </>
  );
};

export default DownloadCvBtn;
