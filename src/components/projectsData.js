import React, {useState, useEffect} from 'react';
import Icon from '@ant-design/icons';
// import demo from "./utils/image/demo.png";
import demo from "./utils/image/demo.png";
import easymarket from "./utils/image/easymarketcover.PNG";
import portfolio from "./utils/image/portfolio.PNG";
import risk from "./utils/image/riskreporter.PNG";
import covid from "./utils/image/covid.PNG";
import kelbox from "./utils/image/kelbox.PNG";



// SVG PALLETTE
const MongoSvg = () => (
<svg t="1588474503129" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="664" width="40" height="30">
    <path d="M733.013333 406.101333c-53.888-237.226667-180.992-315.178667-194.645333-345.002666C523.349333 40.064 507.093333 0 507.093333 0l-0.213333 2.090667v0.554666h-0.042667a24.490667 24.490667 0 0 0-0.170666 1.664v0.64h-0.085334l-0.085333 1.109334v1.109333h-0.128c-0.042667 0.341333-0.042667 0.768-0.128 1.066667v0.896h-0.085333c0 0.298667 0 0.64-0.085334 0.896v0.853333h-0.085333l-0.085333 1.365333v0.085334l-0.384 2.133333v0.341333h-0.085334l-0.128 0.512v0.725334h-0.128v0.938666h-0.213333v0.768h-0.213333v0.896h-0.170667v0.810667h-0.170667v0.725333h-0.256v0.597334h-0.170666v0.768h-0.170667v0.597333h-0.213333v0.554667H503.466667v0.64h-0.170667l-0.042667 0.170666v0.426667h-0.128l-0.042666 0.256v0.256h-0.085334a1.877333 1.877333 0 0 0-0.085333 0.426667l-0.426667 0.896v0.085333a1.28 1.28 0 0 0-0.213333 0.298667v0.341333h-0.170667v0.341333h-0.213333v0.341334h-0.128v0.426666h-0.256v0.597334h-0.170667v0.170666h-0.170666v0.341334h-0.170667v0.469333h-0.170667v0.341333h-0.256v0.469334h-0.170666v0.341333h-0.213334v0.341333h-0.128v0.426667h-0.213333v0.341333h-0.170667v0.256h-0.170666v0.341334h-0.256V32.426667h-0.170667v0.256h-0.213333v0.341333h-0.170667v0.469333h-0.213333v0.170667h-0.128v0.341333h-0.256v0.170667h-0.170667v0.426667h-0.170667v0.170666h-0.170666v0.341334h-0.213334v0.256h-0.128l-0.085333 0.170666v0.170667h-0.085333l-0.085334 0.170667v0.042666h-0.042666a0.682667 0.682667 0 0 1-0.170667 0.298667v0.128h-0.042667L496.213333 37.12v0.042667c-0.085333 0.085333-0.298667 0.256-0.384 0.426666v0.085334h-0.042666l-0.128 0.128v0.128h-0.085334l-0.128 0.128v0.042666h-0.042666l-0.128 0.170667v0.170667h-0.128l-0.085334 0.085333v0.085333h-0.085333c0 0.085333-0.085333 0.085333-0.085333 0.128v0.128h-0.170667l-0.085333 0.128V39.253333h-0.128v0.170667h-0.170667V39.68h-0.170667v0.341333h-0.213333V39.68h-0.213333v0.170667h-0.170667V40.106667h-0.213333v0.341333h-0.213334v0.170667h-0.170666v0.256h-0.170667v0.170666h-0.170667V41.386667h-0.256v0.170666h-0.170666V41.813333h-0.213334v0.170667h-0.170666v0.213333h-0.213334v0.426667h-0.085333v0.170667h-0.256v0.213333h-0.170667v0.085333h-0.170666v0.170667h-0.213334v0.426667h-0.170666v0.170666h-0.213334v0.170667h-0.170666v0.256h-0.213334v0.170667h-0.213333v0.170666h-0.170667v0.170667h-0.170666v0.426667h-0.170667v0.213333h-0.256v0.170667h-0.170667v0.170666h-0.213333v0.256h-0.170667v0.170667h-0.213333v0.298667h-0.170667v0.170666h-0.256V46.933333h-0.085333v0.170667h-0.170667v0.170667h-0.213333v0.170666h-0.170667v0.256h-0.213333v0.170667h-0.128l-0.042667 0.085333v0.085334h-0.085333l-0.170667 0.170666-0.170666 0.128v0.256h-0.170667v0.213334h-0.170667v0.170666h-0.170666v0.170667h-0.128l-0.128 0.128v0.128h-0.085334l-0.085333 0.085333v0.128h-0.085333c-0.213333 0.256-0.298667 0.426667-0.597334 0.682667a15.616 15.616 0 0 0-2.176 1.792l-0.938666 0.725333v0.042667h-0.042667a120.362667 120.362667 0 0 1-2.090667 1.664v0.042667l-3.157333 2.645333V57.173333h-0.085333c-2.432 2.005333-4.992 4.266667-7.936 6.784V64h-0.042667c-7.210667 6.314667-15.786667 14.421333-25.386667 24.234667l-0.64 0.64-0.170666 0.170666C384 149.077333 292.565333 274.176 282.922667 476.330667c-0.853333 16.725333-0.682667 32.981333 0.256 48.810666v0.384c4.650667 79.658667 29.653333 147.669333 60.928 202.922667v0.042667c12.458667 22.016 25.898667 42.026667 39.509333 59.946666v0.042667c47.018667 62.08 95.018667 98.858667 107.264 107.776 18.816 43.648 17.066667 118.570667 17.066667 118.570667l27.477333 9.173333s-5.589333-72.576 2.261333-107.605333c2.432-10.965333 8.192-20.309333 14.890667-28.245334a357.546667 357.546667 0 0 0 34.005333-27.52c0.768-0.810667 1.194667-1.536 1.877334-2.304 64.896-60.501333 186.112-209.493333 144.554666-452.224z" fill="" p-id="665">
    </path>
</svg>
);

const NodeSvg = () => (
<svg t="1588475912350" className="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1511" width="40" height="30"><path d="M632.6 904c-4.2 0-8.4-1.2-12.2-3.2L582 878c-5.8-3.2-3-4.4-1-5 7.6-2.6 9.2-3.2 17.4-8 0.8-0.4 2-0.2 2.8 0.2l29.6 17.6c1 0.6 2.6 0.6 3.6 0L750 816c1-0.6 1.8-1.8 1.8-3.2v-133.4c0-1.4-0.6-2.6-1.8-3.2l-115.6-66.6c-1-0.6-2.4-0.6-3.6 0l-115.6 66.6c-1.2 0.6-1.8 2-1.8 3.2v133.4c0 1.2 0.8 2.4 1.8 3l31.6 18.2c17.2 8.6 27.8-1.6 27.8-11.6v-131.8c0-1.8 1.4-3.4 3.4-3.4h14.6c1.8 0 3.4 1.4 3.4 3.4v131.8c0 23-12.4 36-34.2 36-6.6 0-12 0-26.6-7.2l-30.4-17.4c-7.4-4.4-12.2-12.4-12.2-21v-133.4c0-8.6 4.6-16.8 12.2-21l115.6-66.8c7.4-4.2 17-4.2 24.2 0l115.6 66.8c7.4 4.4 12.2 12.4 12.2 21v133.4c0 8.6-4.6 16.8-12.2 21l-115.6 66.8c-3.4 2.2-7.6 3.4-12 3.4z m93.4-131.6c0-25-16.8-31.6-52.4-36.4-36-4.8-39.6-7.2-39.6-15.6 0-7 3-16.2 29.6-16.2 23.8 0 32.6 5.2 36.2 21.2 0.4 1.6 1.6 2.6 3.2 2.6h15c1 0 1.8-0.4 2.4-1 0.6-0.8 1-1.6 0.8-2.6-2.4-27.6-20.6-40.4-57.6-40.4-33 0-52.6 14-52.6 37.2 0 25.4 19.6 32.2 51.2 35.4 37.8 3.8 40.8 9.2 40.8 16.6 0 13-10.4 18.4-34.8 18.4-30.6 0-37.4-7.6-39.6-22.8-0.2-1.6-1.6-2.8-3.4-2.8h-15c-1.8 0-3.4 1.4-3.4 3.4 0 19.4 10.6 42.6 61.2 42.6 37 0 58-14.4 58-39.6z m109-100.2c0 12.2-10 22.2-22.2 22.2s-22.2-10-22.2-22.2c0-12.6 10.4-22.2 22.2-22.2 12-0.2 22.2 9.6 22.2 22.2z m-3.6 0c0-10.4-8.4-18.6-18.8-18.6-10.2 0-18.6 8.2-18.6 18.6 0 10.4 8.4 18.8 18.6 18.8 10.4-0.2 18.8-8.6 18.8-18.8z m-9 12.4h-5.2c-0.2-1.2-1-7.6-1-7.8-0.4-1.4-0.8-2.2-2.6-2.2h-4.4v10h-4.8v-25h8.6c3 0 8.8 0 8.8 6.6 0 4.6-3 5.6-4.8 6.2 3.4 0.2 3.6 2.4 4.2 5.6 0.2 2 0.6 5.4 1.2 6.6z m-5.6-17.6c0-3.4-2.4-3.4-3.6-3.4h-4v7h3.8c3.2 0 3.8-2.2 3.8-3.6zM274.6 382c0-5.4-2.8-10.2-7.4-12.8l-122.6-70.6c-2-1.2-4.4-1.8-6.8-2h-1.2c-2.4 0-4.6 0.8-6.8 2L7.4 369.2C2.8 371.8 0 376.8 0 382l0.2 190c0 2.6 1.4 5 3.6 6.4 2.2 1.4 5 1.4 7.4 0L84 536.6c4.6-2.8 7.4-7.6 7.4-12.8v-88.8c0-5.2 2.8-10.2 7.4-12.8l31-17.8c2.4-1.4 4.8-2 7.4-2 2.6 0 5.2 0.6 7.4 2l31 17.8c4.6 2.6 7.4 7.6 7.4 12.8v88.8c0 5.2 2.8 10.2 7.4 12.8l72.8 41.8c2.2 1.4 5.2 1.4 7.4 0 2.2-1.2 3.6-3.8 3.6-6.4l0.4-190zM945 174.6v352.8c0 5.2-2.8 10.2-7.4 12.8l-122.6 70.8c-4.6 2.6-10.2 2.6-14.8 0l-122.6-70.8c-4.6-2.6-7.4-7.6-7.4-12.8v-141.6c0-5.2 2.8-10.2 7.4-12.8l122.6-70.8c4.6-2.6 10.2-2.6 14.8 0l30.6 17.6c3.4 2 7.8-0.6 7.8-4.4v-188c0-5.6 6-9.2 11-6.4l73 40.8c4.6 2.4 7.6 7.4 7.6 12.8z m-92 257.8c0-1.4-0.8-2.6-1.8-3.2l-42-24.4c-1.2-0.6-2.6-0.6-3.8 0l-42 24.4c-1.2 0.6-1.8 1.8-1.8 3.2v48.6c0 1.4 0.8 2.6 1.8 3.2l42 24.2c1.2 0.6 2.6 0.6 3.6 0l42-24.2c1.2-0.6 1.8-1.8 1.8-3.2v-48.6z m419.6-1.4c4.6-2.6 7.4-7.6 7.4-12.8V384c0-5.2-2.8-10.2-7.4-12.8l-121.8-70.8c-4.6-2.6-10.2-2.6-14.8 0l-122.6 70.8c-4.6 2.6-7.4 7.6-7.4 12.8v141.6c0 5.4 2.8 10.2 7.4 12.8l121.8 69.4c4.4 2.6 10 2.6 14.6 0l73.6-41c5-2.8 5-10 0-12.8L1100 483.2c-2.4-1.4-3.8-3.8-3.8-6.4v-44.4c0-2.6 1.4-5 3.8-6.4l38.4-22.2c2.2-1.4 5.2-1.4 7.4 0l38.4 22.2c2.2 1.4 3.8 3.8 3.8 6.4v34.8c0 5.6 6.2 9.2 11.2 6.4l73.4-42.6zM1118 438c-0.8 0.6-1.4 1.4-1.4 2.4v27.2c0 1 0.6 2 1.4 2.4l23.6 13.6c0.8 0.6 2 0.6 2.8 0L1168 470c0.8-0.6 1.4-1.4 1.4-2.4v-27.2c0-1-0.6-2-1.4-2.4l-23.6-13.6c-0.8-0.6-2-0.6-2.8 0L1118 438z m-508.4 87v-140.8c0-5.2-3.2-10.2-7.8-12.8l-122.2-70.4c-4.2-2.4-10-2.8-14.8 0l-122.2 70.4c-4.6 2.6-7.8 7.4-7.8 12.8v140.8c0 5.6 3.8 10.4 8 12.8l122.4 70.4c4.8 2.8 10.4 2.6 14.8 0l122-70.4c3.6-2 6.2-5.4 7.2-9.4 0.2-1 0.4-2.2 0.4-3.4z m-148.6-249.8l-1.6 1h2.2l-0.6-1z m152.4 260.4l-0.8-1.4v1.8l0.8-0.4z" fill="" p-id="1512"></path>
</svg>
)

const ReactSvg = () => (
<svg t="1588476338383" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2996" width="40" height="30"><path d="M836.4 354.4c-10.8-3.6-21.6-7-32.4-10.2 1.8-7.4 3.4-14.8 5-22.2 24.6-119.2 8.4-215-46.2-246.6-52.6-30.2-138.4 1.2-225.2 76.8-8.6 7.4-17 15.2-25 23-5.4-5.2-11-10.4-16.6-15.4-91-80.8-182.2-114.8-236.8-83-52.4 30.4-68 120.6-46 233.4 2.2 11.2 4.6 22.2 7.4 33.4-12.8 3.6-25.4 7.6-37.2 11.8C76.6 392.4 0 450.8 0 511.2c0 62.4 81.6 125 192.6 163 9 3 18 6 27.2 8.6-3 12-5.6 23.8-8 36-21 111-4.6 199 47.8 229.2 54 31.2 144.8-0.8 233.2-78.2 7-6.2 14-12.6 21-19.4 8.8 8.6 18 16.8 27.2 24.8 85.6 73.6 170.2 103.4 222.4 73.2 54-31.2 71.6-125.8 48.8-241-1.8-8.8-3.8-17.8-6-27 6.4-1.8 12.6-3.8 18.8-5.8 115.4-38.2 199-100 199-163.4 0-60.6-78.8-119.4-187.6-156.8zM565.8 184.6c74.4-64.8 143.8-90.2 175.4-72 33.8 19.4 46.8 97.8 25.6 200.8-1.4 6.8-2.8 13.4-4.6 20-44.4-10-89.4-17.2-134.6-21.2-26-37.2-54.4-72.8-85.2-106.2 7.8-7.4 15.4-14.4 23.4-21.4zM334.4 615c10.2 17.4 20.6 34.8 31.6 51.8-31.2-3.4-62.2-8.4-92.8-15 8.8-28.8 19.8-58.6 32.6-89 9.2 17.6 18.6 35 28.6 52.2z m-60.6-240.6c28.8-6.4 59.4-11.6 91.2-15.6-10.6 16.6-21 33.6-30.8 50.8-9.8 17-19.4 34.4-28.4 52-12.6-29.8-23.2-59-32-87.2z m54.8 137.8c13.2-27.6 27.6-54.6 42.8-81.2s31.6-52.4 48.8-77.8c30-2.2 60.6-3.4 91.8-3.4s62 1.2 91.8 3.4c17 25.2 33.2 51 48.6 77.4s29.8 53.4 43.4 80.8c-13.4 27.6-27.8 54.8-43.2 81.6-15.2 26.6-31.4 52.4-48.4 78-29.8 2.2-60.8 3.2-92.2 3.2s-61.8-1-91.2-2.8c-17.4-25.4-33.8-51.4-49.2-78s-29.6-53.6-43-81.2z m361.2 102.4c10.2-17.6 19.8-35.4 29.2-53.4 12.8 29 24 58.4 33.8 88.6-31 7-62.4 12.4-94 16 10.8-16.8 21-34 31-51.2z m28.8-153c-9.4-17.6-19-35.2-29-52.4-9.8-17-20-33.8-30.6-50.4 32.2 4 63 9.4 91.8 16-9.2 29.6-20 58.4-32.2 86.8zM512.4 236.6c21 22.8 40.8 46.8 59.2 71.6-39.6-1.8-79.4-1.8-119 0 19.6-25.8 39.8-49.8 59.8-71.6zM280.4 114c33.6-19.6 108.2 8.4 186.8 78 5 4.4 10 9.2 15.2 14-31 33.4-59.6 69-85.8 106.2-45.2 4-90 11-134.4 20.8-2.6-10.2-4.8-20.6-7-31-18.8-96.8-6.4-169.8 25.2-188z m-49 527.2c-8.4-2.4-16.6-5-24.8-7.8-42.6-13.4-91-34.6-126-62.4-20.2-14-33.8-35.6-37.6-59.8 0-36.6 63.2-83.4 154.4-115.2 11.4-4 23-7.6 34.6-11 13.6 43.4 30 86 49 127.2-19.2 41.8-35.8 85-49.6 129z m233.2 196c-33 30.2-71.2 54.2-112.8 70.6-22.2 10.6-47.8 11.6-70.6 2.6-31.8-18.4-45-89-27-184 2.2-11.2 4.6-22.4 7.4-33.4 44.8 9.6 90 16.2 135.8 19.6 26.4 37.4 55.4 73.2 86.4 106.8-6.4 6.2-12.8 12.2-19.2 17.8z m49-48.6c-20.4-22-40.8-46.4-60.6-72.6 19.2 0.8 39 1.2 59 1.2 20.6 0 40.8-0.4 60.8-1.4-18.4 25.4-38.2 49.6-59.2 72.8z m261.4 60c-1.8 24.4-13.8 47.2-33 62.6-31.8 18.4-99.6-5.6-172.8-68.4-8.4-7.2-16.8-15-25.4-23 30.6-33.8 58.8-69.6 84.4-107.2 45.8-3.8 91.4-10.8 136.4-21 2 8.2 3.8 16.4 5.4 24.4 9.8 43.2 11.4 88.2 5 132.6z m36.4-215c-5.6 1.8-11.2 3.6-17 5.2-14-43.6-31.2-86.2-51-127.6 19.2-40.8 35.4-82.8 49-125.8 10.4 3 20.4 6.2 30 9.4 93.2 32 158.6 79.6 158.6 116 0 39.2-69.8 89.8-169.6 122.8z m-299.4-30c50.6 0 91.6-41 91.6-91.6s-41-91.6-91.6-91.6c-50.6 0-91.6 41-91.6 91.6s41 91.6 91.6 91.6z" p-id="2997"></path>
</svg>    
)

const ViewSvg = () => (
    <svg t="1589327176126" class="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3718" width="40" height="30"><path d="M1145.04 482.8C1036.58 271.18 821.86 128 576 128S115.36 271.28 6.96 482.82a64.7 64.7 0 0 0 0 58.38C115.42 752.82 330.14 896 576 896s460.64-143.28 569.04-354.82a64.7 64.7 0 0 0 0-58.38zM576 800a288 288 0 1 1 288-288 287.86 287.86 0 0 1-288 288z m0-480a190.62 190.62 0 0 0-50.62 7.58 95.7 95.7 0 0 1-133.8 133.8A191.56 191.56 0 1 0 576 320z" p-id="3719" fill="#bfbfbf"></path>
    </svg>    
    )

const MongoIcon = props => <Icon component={MongoSvg} {...props} />;
const NodeIcon = props => <Icon component={NodeSvg} {...props} />;
const ReactIcon = props => <Icon component={ReactSvg} {...props} />;
const ViewIcon = props => <Icon component={ViewSvg} {...props}/>;


// export const visitorsCount = (props) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         async function fetchData() {
//             const response = await  fetch('https://api.countapi.xyz/update/obinnaokere.heroku.com/site?amount=1');
//             response.json()
//                     .then(data => setCount(data))
//         }

//         fetchData();
//     });

//     return (
//         <div>
//             {count}
//         </div>
//     )
// }



export const projectsData = [
    {
        name: 'COVID-19 Tracker',
        description: 'This app shows the world statistics of Corona Virus cases (deaths, recovered, new).',
        isCompleted: true,
        coverImg: covid,
        tools: [                                                
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />,
        <ViewIcon />],
        url: 'https://covid19-update.now.sh/',
        views: ''
    },
    {
        name: 'Kelbox',
        description: 'An inventory management system that allows tracking goods across a business supply chain. It optimizes the entire spectrum spanning from order placement to order delivery, mapping the complete journey of a product.',
        isCompleted: false,
        coverImg: kelbox,
        tools: [                                                
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />,
        <ViewIcon />],
        url: 'https://kelbox.now.sh/',
        views: ''
    },
    {
        name: 'Risk Reporter',
        description: 'Risk Reporter is an app used to report incidences that may pose a risk in a working environment. It was built using MongoDB, Express JS, React JS, Node JS.',
        isCompleted: true,
        coverImg: risk,
        tools: [                                                
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />,
        <ViewIcon />],
        url: 'https://risk-reporter.herokuapp.com/',
        views: ''
    },
    {
        name: 'Easy Market',
        description: "This is Easy Market's landing page. It was Built using React JS.",
        isCompleted: true,
        coverImg: easymarket,
        tools: [                                                
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />,
        <ViewIcon />],
        url: 'https://easymarket.now.sh/',
        views: ''
    },
    {
        name: 'My Portfolio Page',
        description: "My Porfolio Page showcases my #DEV skillset and proficiencies.",
        isCompleted: true,
        coverImg: portfolio,
        tools: [                                                
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />],
        url: 'https://obinnaokere.heroku.com/',
        views: ''
    },
    {
        name: 'Robo Friends',
        description: "Robo Friends is an app that represents human as robots. It explores the use of React's built-in Fetch API function.",
        isCompleted: false,
        coverImg: demo,
        tools: [                                                
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />],
        url: '',
        views: ''
    },
    {
        name: 'Richy Stores',
        description: "Richy Stores is an e-Commerce website where sales transactions are carried out.",
        isCompleted: false,
        coverImg: demo,
        tools: [                                        
        // <IconFont type="icon-javascript"  />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />],
        url: '',
        views: ''
    },
    {
        name: 'Smartbrain',
        description: "Smartbrain is an app that detects faces on a photo. It was built using Express JS, React JS, Node JS and PostgreSQL to accomodate it's login features.",
        isCompleted: false,
        coverImg: demo,
        tools: [                                            
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />],
        url: '',
        views: ''
    },
    {
        name: 'Motivate Me',
        description: "Motivates Me is a rich resource of positive quotes that are uplifting and keeps you upbeat as you carry out your day in positive energy.",
        isCompleted: false,
        coverImg: demo,
        tools: [                                    
        // <IconFont type="icon-javascript" />,
        <MongoIcon style={{ fontSize: '10px', color: 'gray'}}/>,
        <NodeIcon />,
        <ReactIcon />],
        url: '',
        views: ''
    }
]
