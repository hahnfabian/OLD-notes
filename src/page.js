import "./css/page.css";

export default function page() {
    return (
        <div>
            <div style={{display:"flex", width:"100%", justifyContent:"center", flexShrink:"0"}}>
                <div style={{width:"900"}}>
                    <div>
                        AAA
                    </div>
                </div>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                    <div style={{maxWidth: "100%", minWidth:"0px", width:"900px" }}>
                        <div style={{width:"100%", display:"flex", justifyContent:"center", flexShrink:"0"}}>
                            aaaa

                        </div>
                    </div>
            </div>
        </div>
    )
}