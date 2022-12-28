import React from 'react'

import { Stack, Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos}) => {

  return (
    <Stack direction="row" flexWrap="wrap" justrifycontent="start" gap={2}>
      {videos.map((item,idx) =>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard ChannelDetails={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos