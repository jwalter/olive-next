import 'isomorphic-fetch'

const BaseUrl = 'http://liveresultat.orientering.se/api.php?method='
const GetClassesUrl = 'getclasses&comp='
const GetClassStandingsUrl = 'getclassresults&unformattedTimes=true&comp=10259&class='

export const GetClasses = async ({compId}) => {
    const resp = await fetch(BaseUrl + GetClassesUrl + compId)
    const json = await resp.json()
    return json.classes
}

export const GetClassStandings = async ({className}) => {
    console.log('Loading results for ' + className)
    const url = BaseUrl + GetClassStandingsUrl + className
    console.log(url)
    const resp = await fetch(url)
    const json = await resp.json()
    return json
}
