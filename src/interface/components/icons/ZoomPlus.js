import React from "react";
function ZoomPlus({ size }) {
  return (
    <svg
      height={size}
      viewBox="0 0 34 42"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMitterlimit: "2",
      }}
    >
      <path
        style={{ fill: "white" }}
        d="M23.698,31.966l7.53,9.194c0.496,0.605 1.39,0.694 1.995,0.199c0.605,-0.496 0.694,-1.39 0.198,-1.995l-7.221,-8.817c4.344,-2.988 7.194,-7.994 7.194,-13.659c0,-9.144 -7.424,-16.568 -16.568,-16.568c-9.144,0 -16.568,7.424 -16.568,16.568c0,9.144 7.424,16.568 16.568,16.568c2.45,0 4.777,-0.534 6.872,-1.49Zm-6.872,-28.811c7.579,0 13.733,6.153 13.733,13.733c0,7.579 -6.154,13.733 -13.733,13.733c-7.58,0 -13.733,-6.154 -13.733,-13.733c0,-7.58 6.153,-13.733 13.733,-13.733Zm-1.417,12.316l-4.069,0c-0.782,0 -1.418,0.635 -1.418,1.417c0,0.782 0.636,1.417 1.418,1.417l4.069,0l0,4.069c0,0.782 0.635,1.417 1.417,1.417c0.782,0 1.417,-0.635 1.417,-1.417l0,-4.069l4.069,0c0.782,0 1.417,-0.635 1.417,-1.417c0,-0.782 -0.635,-1.417 -1.417,-1.417l-4.069,0l0,-4.069c0,-0.782 -0.635,-1.418 -1.417,-1.418c-0.782,0 -1.417,0.636 -1.417,1.418l0,4.069Z"
      />
    </svg>
  );
}
export default ZoomPlus;
