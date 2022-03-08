import * as React from "react";
import {
   chakra,
   keyframes,
   ImageProps,
   forwardRef,
   usePrefersReducedMotion,
} from "@chakra-ui/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
   const prefersReducedMotion = usePrefersReducedMotion();

   const animation = prefersReducedMotion
      ? undefined
      : `${spin} infinite 20s linear`;
   return (
      <chakra.img
         animation={animation}
         src="https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg"
         ref={ref}
         {...props}
      />
   );
   // return <chakra.img src={logo} ref={ref} {...props} />;
});