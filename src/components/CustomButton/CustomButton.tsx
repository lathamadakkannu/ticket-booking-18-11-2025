"use client";
import React from "react";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/system";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  component?: any;  
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  startIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function CustomButton({
  children,
  variant = "contained",
  component = "label",
  color = "primary",
  startIcon,
  size = "small",
  className,
  sx = {},
  onClick,
  type = "button",
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      component={component}   
      color={color}
      startIcon={startIcon}
      size={size}
      className={className}
      sx={{
        borderRadius: "12px",
        textTransform: "none",
        ...sx,
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}
