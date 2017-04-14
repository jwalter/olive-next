const formatTime = (sec_num) => {
    sec_num /= 100
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    minutes += hours * 60
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}
export const Runner = ({runner, splitControls}) => {
    const splits = []
    splitControls.forEach(sc => splits.push(runner.splits[sc.code]))
    return <tr> 
        <td>{ runner.name }</td>
        { splits.map((s, index) => <td key={index}>{formatTime(s)}</td>) }
        <td>{ runner.result }</td>
    </tr>
}
