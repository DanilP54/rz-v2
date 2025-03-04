import { DetailsHeader } from "@/widgets/detail-header/DetailHeader";

export default function MusicPageId() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <DetailsHeader segment="instincts" />
      <div style={{ backgroundColor: '#333', flex: '1 1 0' }}>
        <div style={{
          backgroundColor: 'white', height: '100%', margin: '0px 300px'
        }}>

        </div>
      </div>
    </div>
  )
}
