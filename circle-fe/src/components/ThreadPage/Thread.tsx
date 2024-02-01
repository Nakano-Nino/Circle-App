import {
  Box,
  Flex,
  Stack,
} from "@chakra-ui/react";
import ThreadBase from "@/features/threads/components/ThreadBase";

import { useState, useEffect } from "react";
import { API } from "@/config/api";
import { ThreadType } from "@/types/ThreadType";

function ThreadComponent() {

  const [data, setData] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const response = await API.get("/threads");
          setData(response.data.data);
      };
      fetchData();
  }, []);

  return (
      <Flex gap={3} >
          <Box >
              <Stack mt={8}>
                  {
                      data.map((e: ThreadType) => (
                          <ThreadBase
                              key={e.id}
                              id={e.id}
                              content={e.content}
                              image={e.image}
                              user={e.user}
                              replies={e.replies}
                              likes={e.likes}
                              created_at={e.created_at}
                          />
                      ))
                  }
              </Stack>
          </Box>
      </Flex>
  );
}

export default ThreadComponent;
