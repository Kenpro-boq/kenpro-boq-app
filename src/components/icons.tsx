import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    {children}
  </svg>
);

export const SelectIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </IconWrapper>
);

export const LineIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15" />
  </IconWrapper>
);

export const RectangleIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5v16.5H3.75V3.75Z" />
  </IconWrapper>
);

export const CircleIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </IconWrapper>
);

export const PushPullIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m-3.75-3.75h7.5" transform="translate(0 -6)" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v-7.5" />
  </IconWrapper>
);

export const OrbitIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992h-4.992v-4.992z" />
  </IconWrapper>
);

export const PanIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25a8.967 8.967 0 0 1 8.967 8.967c0 2.152-.75 4.14-2 5.75m-5.303-3.95-3.328-3.328a3 3 0 0 0-4.243 4.242l3.328 3.329a3 3 0 0 0 4.243-4.242Z" />
  </IconWrapper>
);

export const ZoomIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v6m3-3h-6" />
  </IconWrapper>
);

export const EraserIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </IconWrapper>
);

export const PaintBucketIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 0-1.06-1.06L15 8.94l-1.72-1.72a.75.75 0 0 0-1.06 0l-1.72 1.72-1.72-1.72a.75.75 0 0 0-1.06 0l-1.72 1.72-4.72-4.72a.75.75 0 0 0-1.06 1.06L8.25 10.5l-4.72 4.72a.75.75 0 0 0 1.06 1.06L9 12.62l1.72 1.72a.75.75 0 0 0 1.06 0l1.72-1.72 1.72 1.72a.75.75 0 0 0 1.06 0l4.72-4.72a.75.75 0 0 0-1.06-1.06L15.75 10.5Z" />
  </IconWrapper>
);

export const TapeMeasureIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </IconWrapper>
);

export const GroupIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A2.25 2.25 0 0 1 4.5 4.875h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V7.125Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25v-6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25h6" />
  </IconWrapper>
);

export const UngroupIcon: React.FC = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h.007v.007H3.75V12Zm2.25.007h.007v-.007H6V12Zm2.25-.007h.007v.007H8.25V12Zm2.25.007h.007v-.007H10.5V12Zm2.25-.007h.007v.007H12.75V12Zm2.25.007h.007v-.007H15V12Zm2.25-.007h.007v.007H17.25V12Zm2.25.007h.007v-.007H19.5V12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5v-15A2.25 2.25 0 0 1 6.75 2.25h10.5A2.25 2.25 0 0 1 19.5 4.5v15a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5Z" />
  </IconWrapper>
);
