/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CopyOverridesProps = {
    Copy?: PrimitiveOverrideProps<FlexProps>;
    "amplify-logo 1"?: PrimitiveOverrideProps<ViewProps>;
    tweets?: PrimitiveOverrideProps<ViewProps>;
    "Artboard-2"?: PrimitiveOverrideProps<ViewProps>;
    "Group-7"?: PrimitiveOverrideProps<ViewProps>;
    "Oval-5"?: PrimitiveOverrideProps<ViewProps>;
    Vector27043017?: PrimitiveOverrideProps<IconProps>;
    Vector27043018?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    "Fill-127043020"?: PrimitiveOverrideProps<IconProps>;
    "Fill-127043021"?: PrimitiveOverrideProps<IconProps>;
    "What is Amplify Studio?"?: PrimitiveOverrideProps<TextProps>;
    "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to accelerate your UI development as well. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user. Amplify Studio offers an integration with Figma, allowing you to generate reusable React code by importing your Figma design file. Amplify Studio automatically converts any Figma component in your Figma file to a React component that can then be used in your app. Whenever you make a change to the component in Figma you sync the changes to Amplify Studio and update your application!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CopyProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CopyOverridesProps | undefined | null;
}>;
export default function Copy(props: CopyProps): React.ReactElement;
