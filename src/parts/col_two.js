import React from "react";

const imageStyle = {
    'width': '50%',
    height: '50%'
}

export const col_two = () => {
    return <div>
        <p>
            (March 2 2021) It looks like my ACH transfer is still pending. I also got a $20 bonus from using a
            referral link which is also still pending. No interest gained yet.
        </p>
        <img style={imageStyle} src="https://resources-linus23232.s3.amazonaws.com/day_one.jpg" alt="day 1 progress"/>
        <hr/>
        <p>
            (March 10 2021) The deposits finally arrived in my account. Started earning interest about a day ago;
            so far I only have 2 cents of interest earned.
        </p>
        <img style={imageStyle} src="https://resources-linus23232.s3.amazonaws.com/55514.jpg" alt="day 1 progress"/>
    </div>
}
