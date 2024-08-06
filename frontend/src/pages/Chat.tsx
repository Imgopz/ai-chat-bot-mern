import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";

const chatMessages = [
  {
    role: "user",
    content: "How can I use Python to extract data from an API?",
  },
  {
    role: "assistant",
    content:
      "You can use the `requests` library in Python to make API calls and extract data. Here's a simple example:\n\n```python\nimport requests\n\nresponse = requests.get('https://api.example.com/data')\ndata = response.json()\nprint(data)\n```\nThis code sends a GET request to the API endpoint and prints the JSON response.",
  },
  {
    role: "user",
    content: "What are some best practices for data visualization in Tableau?",
  },
  {
    role: "assistant",
    content:
      "Some best practices for data visualization in Tableau include:\n\n1. **Keep it simple:** Avoid clutter and focus on key insights.\n2. **Use the right chart type:** Choose charts that best represent the data and insights.\n3. **Leverage color wisely:** Use color to highlight important data points but avoid overuse.\n4. **Maintain consistency:** Use consistent colors, fonts, and formatting throughout your dashboard.\n5. **Provide context:** Add titles, labels, and descriptions to make your visualizations easy to understand.",
  },
  {
    role: "user",
    content: "How do I set up Logstash to collect logs from multiple sources?",
  },
  {
    role: "assistant",
    content:
      'To set up Logstash to collect logs from multiple sources, follow these steps:\n\n1. **Install Logstash:** Download and install Logstash on your server.\n2. **Create a configuration file:** Define input, filter, and output plugins in a configuration file. For example:\n\n```plaintext\ninput {\n  file {\n    path => "/var/log/app1/*.log"\n    start_position => "beginning"\n  }\n  file {\n    path => "/var/log/app2/*.log"\n    start_position => "beginning"\n  }\n}\n\nfilter {\n  # Add any filters you need\n}\n\noutput {\n  elasticsearch {\n    hosts => ["http://localhost:9200"]\n    index => "logs-%{+YYYY.MM.dd}"\n  }\n  stdout {\n    codec => rubydebug\n  }\n}\n```\n3. **Run Logstash:** Start Logstash with the configuration file using the command:\n\n```shell\nlogstash -f /path/to/logstash.conf\n```\nLogstash will now collect logs from the specified paths and send them to Elasticsearch.',
  },
  {
    role: "user",
    content:
      "What are the main steps in the Medallion architecture for data processing?",
  },
  {
    role: "assistant",
    content:
      "The main steps in the Medallion architecture for data processing are:\n\n1. **Bronze Layer:** Raw data is ingested from various sources and stored in its raw format. This layer acts as the landing zone for all incoming data.\n2. **Silver Layer:** Data is cleaned, transformed, and enriched. This layer involves removing duplicates, handling missing values, and applying business logic to create a refined dataset.\n3. **Gold Layer:** The final, highly curated, and aggregated data is stored in this layer. It is optimized for reporting, analytics, and machine learning. This layer provides ready-to-use data for visualization and insights.",
  },
  {
    role: "user",
    content:
      "Can you help me with a summary of the different orientations' impact on the strength of metal additive manufacturing parts?",
  },
  {
    role: "assistant",
    content:
      "Certainly! The orientation of metal parts during additive manufacturing significantly impacts their strength and mechanical properties. Studies have shown that vertical orientation tends to exhibit lower tensile strength and higher anisotropy compared to horizontal orientation. This is due to the layer-by-layer building process, which can create weak interlayer bonds. Horizontal orientation, on the other hand, generally provides better tensile strength and isotropy, resulting in more uniform mechanical properties. Ensuring optimal orientation is crucial for achieving the desired mechanical performance of the manufactured parts.",
  },
];

const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {/* {auth?.user?.name.split(" ")[1][0]} */}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBOT
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advices,
            Education, etc. But avoid sharing personal information{" "}
          </Typography>
          <Button
            sx={{
              width: "200px",
              color: "white",
              fontueight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
