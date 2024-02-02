import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({ value }) => {
  const { url, isPlaylist, playlistUrl } = value
  if (isPlaylist && playlistUrl) {
    return <p>Youtube Playlist</p>
  } else if (!isPlaylist && url) {
    const id = getYouTubeId(url)
    return <YouTube videoId={id} />
  }
  return <p style={{ textAlign: 'center' }}>Youtube Embed</p>
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'isPlaylist',
      title: 'Are you embedding a youtube playlist?',
      type: 'boolean',
    },
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      hidden: ({ parent }) => parent?.isPlaylist,
    },
    {
      name: 'playlistUrl',
      type: 'url',
      title: 'YouTube playlist embed URL',
      hidden: ({ parent }) => !parent?.isPlaylist,
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
}
