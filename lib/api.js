import 'isomorphic-unfetch'

const BaseUrl = 'https://r.emit.live/api.php?method='
const GetCompetitionsUrl = 'getcompetitions'
const GetClassesUrl = 'getclasses&comp='
const GetClassStandingsUrl = 'getclassresults&unformattedTimes=false'

export const GetCompetitions = async () => {
    const resp = await fetch(BaseUrl + GetCompetitionsUrl)
    const json = await resp.json()
    return json.competitions    
}

export const GetClasses = async ({compId}) => {
    const resp = await fetch(BaseUrl + GetClassesUrl + compId)
    const json = await resp.json()
    return json.classes
}

export const GetClassStandings = async ({compId, className, lastHash}) => {
    const url = BaseUrl + GetClassStandingsUrl + '&comp=' + compId + '&class=' + className + '&last_hash=' + lastHash
    const resp = await fetch(url)
    const json = await resp.json()
    return json
}
