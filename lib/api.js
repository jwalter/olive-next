import 'isomorphic-fetch'

const BaseUrl = 'http://liveresultat.orientering.se/api.php?method='
const GetClassesUrl = 'getclasses&comp='
const GetClassStandingsUrl = 'getclassresults&unformattedTimes=false'

export const GetClasses = async ({compId}) => {
    const resp = await fetch(BaseUrl + GetClassesUrl + compId)
    const json = await resp.json()
    return json.classes
}

export const GetClassStandings = async ({compId, className}) => {
    console.log('Loading results for ' + className)
    const url = BaseUrl + GetClassStandingsUrl + '&comp=' + compId + '&class=' + className
    console.log(url)
    const resp = await fetch(url)
    const json = await resp.json()
    return json
}
