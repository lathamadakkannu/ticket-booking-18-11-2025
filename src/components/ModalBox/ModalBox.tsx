"use client";

import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Paper,
  Fade,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CommonModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function ModalBox({
  open,
  onClose,
  title,
  children,
  maxWidth = "800px",
}: CommonModalProps) {
  const modalTitleId = "modal-title";

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby={modalTitleId}
      aria-describedby="modal-description"
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      BackdropComponent={Backdrop}
      className="flex items-center justify-center p-4"
    >
      <Fade in={open}>
        <Paper
          sx={{
            position: "relative",
            borderRadius: 4,
            boxShadow: 24,
            p: 3,
            maxWidth,
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography
              id={modalTitleId}
              component="h2"
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              {title}
            </Typography>
            <IconButton
              onClick={onClose}
              aria-label="Close modal"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "text.primary" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Modal Content */}
          <Box id="modal-description" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
}
