

const GetClasses = ({className}) => {
    const resp = await fetch(GetClassesUrl)
    const json = await resp.json()
    return json
}
