import { Spin } from 'antd'

function Loader() {
    const style = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'grid',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.6,
        height: '100%',
        zIndex: 9999999999,
    }

    return (
        <div style={style}>
            <Spin style={{margin: 'auto'}}/>
        </div>
    )
}

export default Loader
