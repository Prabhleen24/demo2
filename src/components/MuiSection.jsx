import {
  Paper,
  Typography,
  Divider,
  Chip,
  Stack,
  Box
} from "@mui/material";

function MuiSection() {
  return (
    <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="600" gutterBottom>
        Material UI Section
      </Typography>

      <Typography variant="subtitle1" color="text.secondary">
        Interface built using Material UI components
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Home */}
      <Box mb={3}>
        <Typography variant="h6">🏠 Home</Typography>
        <Typography>
          This section demonstrates a clean, component-based UI using Material UI.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* About Me */}
      <Box mb={3}>
        <Typography variant="h6">👤 About Me</Typography>
        <Typography>
          Computer Science undergraduate with a strong interest in full stack
          development and modern UI technologies.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Academic Details */}
      <Box mb={3}>
        <Typography variant="h6">🎓 Academic Details</Typography>
        <Typography>
          Bachelor of Technology in Computer Science Engineering
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specialization: Artificial Intelligence & Machine Learning
        </Typography>

        <Chip
          label="Undergraduate"
          color="primary"
          sx={{ mt: 1 }}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Skills */}
      <Box mb={3}>
        <Typography variant="h6">🛠 Skills</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
          <Chip label="HTML" />
          <Chip label="CSS" />
          <Chip label="JavaScript" />
          <Chip label="React" />
          <Chip label="Material UI" />
          <Chip label="Bootstrap" />
          <Chip label="Node.js" />
        </Stack>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Contact */}
      <Box>
        <Typography variant="h6">📞 Contact</Typography>
        <Typography>Email: student@cuchd.in</Typography>
        <Typography>Phone: +91 XXXXXXXX</Typography>
      </Box>
    </Paper>
  );
}

export default MuiSection;
