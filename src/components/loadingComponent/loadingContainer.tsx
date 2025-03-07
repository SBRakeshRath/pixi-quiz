"use client";
// Add a declaration for the module to avoid TypeScript errors
import "./loadingContainer.scss";



export default function Loading({ message }: { message?: string }) {
  return (
    <div className="loadingScreen">
      <div className="loadingWrapper">
        <div className="animation">
          {/* <Ripple /> */}
        </div>
        <h1>{message ? message : "Loading..."}</h1>
      </div>
    </div>
  );
}
