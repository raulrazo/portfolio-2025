import albumCover from '../assets/portfolio_album_cover.png'
import cdSvg from '../assets/CD_3.svg'

function Logo() {
  return (
    <div className="flex items-center justify-center">
      {/* Container for album and CD */}
      <div className="relative flex items-center">
        {/* Album cover */}
        <img 
          src={albumCover} 
          alt="Album Cover" 
          className="w-32 h-32 relative z-10"
        />
        
        {/* CD (positioned to overlap with album cover) */}
        <img 
          src={cdSvg} 
          alt="CD" 
          className="w-32 h-32 -ml-12 pt-1 animate-spin-slow
          "
        />
      </div>
    </div>
  )
}

export default Logo