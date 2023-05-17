function Icons(icon) {
  console.log('icon is: ',icon)
  let opacity = icon.opacity ? icon.opacity : 1
  const isSelectedColor = "#F15454"
  const blackAlt = "#35383E"
  switch (icon.type) {
    case "bike":
      return (
        <svg
          width="29"
          height="21"
          viewBox="0 0 29 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5236 2.13421L15.4535 2H15.302H14.1375C13.6808 2 13.3 1.61842 13.3 1.125C13.3 0.631577 13.6808 0.25 14.1375 0.25H15.7325C16.1715 0.25 16.5767 0.495963 16.7886 0.902928L16.7887 0.903235L21.2248 9.39699L21.3232 9.58532L21.5249 9.51861C22.0527 9.34406 22.6153 9.25 23.2 9.25C26.2576 9.25 28.75 11.816 28.75 15C28.75 18.184 26.2576 20.75 23.2 20.75C20.1424 20.75 17.65 18.184 17.65 15C17.65 13.2003 18.45 11.5962 19.7 10.541L19.8532 10.4117L19.7603 10.2341L18.777 8.35443L18.5651 7.94941L18.3384 8.34631L14.497 15.071C14.4968 15.0713 14.4966 15.0716 14.4965 15.0719C14.3393 15.3409 14.0661 15.5 13.775 15.5H11.5547H11.3331L11.3065 15.72C10.9627 18.5607 8.62412 20.75 5.8 20.75C2.7424 20.75 0.25 18.184 0.25 15C0.25 11.816 2.7424 9.25 5.8 9.25C6.26396 9.25 6.7187 9.30832 7.15115 9.42016L7.34948 9.47145L7.43876 9.28708L8.64407 6.79802L8.70783 6.66635L8.62427 6.54627L7.62286 5.1072L7.54826 5H7.41766H5.4375C4.98084 5 4.6 4.61842 4.6 4.125C4.6 3.63158 4.98084 3.25 5.4375 3.25H7.975C8.24056 3.25 8.49495 3.38209 8.65287 3.6108L8.6535 3.6117L9.89506 5.39295L9.96967 5.5H10.1002H16.8698H17.2826L17.0914 5.13421L15.5236 2.13421ZM21.0018 12.6201L20.8327 12.2967L20.5923 12.5712C20.0274 13.216 19.6875 14.0664 19.6875 15C19.6875 16.9956 21.2506 18.625 23.2 18.625C25.1494 18.625 26.7125 16.9956 26.7125 15C26.7125 13.0044 25.1494 11.375 23.2 11.375C23.0145 11.375 22.8281 11.3901 22.65 11.4208L22.312 11.4791L22.471 11.783L23.9346 14.5815L23.9347 14.5818C24.1586 15.0083 23.9993 15.5434 23.5941 15.7711C23.1953 15.9952 22.6879 15.8459 22.4657 15.4189L22.4654 15.4185L21.0018 12.6201ZM6.03562 15.5H5.94079C5.27693 15.4339 4.84027 14.6813 5.15977 14.0163C5.1598 14.0162 5.15983 14.0162 5.15985 14.0161L6.25627 11.743L6.4181 11.4075L6.04628 11.3848L6.04295 11.3846C5.96805 11.3801 5.88465 11.375 5.8 11.375C3.85057 11.375 2.2875 13.0044 2.2875 15C2.2875 16.9956 3.85057 18.625 5.8 18.625C7.47509 18.625 8.87088 17.415 9.22511 15.8037L9.29187 15.5H8.98094H6.03562ZM7.71943 13.75H13.1588H13.2648L13.3385 13.6737L13.343 13.669L13.4859 13.5212L13.3684 13.3525L10.0652 8.6087L9.82102 8.2581L9.63496 8.64268L7.33761 13.3911L7.55813 13.4978V13.5V13.75H7.56266H7.71943ZM16.797 7.62395L17.0104 7.25H16.5798H11.668H11.6634H11.1849L11.4582 7.64279L14.1589 11.524L14.3849 11.8489L14.5812 11.5052L16.797 7.62395Z"
            fill={icon.color}
            opacity={opacity}
            stroke={icon.color}
            stroke-width="0.5"
          />
        </svg>
      );
    case "userBox":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity={opacity}>
            <path
              d="M22.2444 25.8824C21.8171 24.5534 20.8755 23.3791 19.5657 22.5415C18.2559 21.704 16.651 21.25 15 21.25C13.349 21.25 11.7441 21.704 10.4343 22.5415C9.12446 23.3791 8.18287 24.5534 7.75556 25.8824"
              stroke="#33363F"
              stroke-width="2"
            />
            <circle
              cx="15"
              cy="12.5"
              r="3.75"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <rect x="3.5" y="3.5" width="23" height="23" rx="3" stroke="#33363F" stroke-width="2" />
          </g>
        </svg>
      );
    case "card":
      return (
        <svg
          width="25"
          height="20"
          viewBox="0 0 25 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.9683 2.05952C22.3458 2.05952 22.6548 2.36845 22.6548 2.74603V4.11905H2.05952V2.74603C2.05952 2.36845 2.36845 2.05952 2.74603 2.05952H21.9683ZM22.6548 8.2381V16.4762C22.6548 16.8538 22.3458 17.1627 21.9683 17.1627H2.74603C2.36845 17.1627 2.05952 16.8538 2.05952 16.4762V8.2381H22.6548ZM2.74603 0C1.23142 0 0 1.23142 0 2.74603V16.4762C0 17.9908 1.23142 19.2222 2.74603 19.2222H21.9683C23.4829 19.2222 24.7143 17.9908 24.7143 16.4762V2.74603C24.7143 1.23142 23.4829 0 21.9683 0H2.74603ZM5.14881 13.0437C4.57815 13.0437 4.11905 13.5028 4.11905 14.0734C4.11905 14.6441 4.57815 15.1032 5.14881 15.1032H7.20834C7.779 15.1032 8.2381 14.6441 8.2381 14.0734C8.2381 13.5028 7.779 13.0437 7.20834 13.0437H5.14881ZM10.6409 13.0437C10.0702 13.0437 9.61111 13.5028 9.61111 14.0734C9.61111 14.6441 10.0702 15.1032 10.6409 15.1032H15.4464C16.0171 15.1032 16.4762 14.6441 16.4762 14.0734C16.4762 13.5028 16.0171 13.0437 15.4464 13.0437H10.6409Z"
            fill="#35383E"
            opacity={opacity}
          />
        </svg>
      );
    case "map":
      return (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.8125 24.1875L14.0625 7.3125M24.1875 5.0625L2.8125 9.5625"
            stroke="#2A4157"
            stroke-opacity="0.24"
          />
          <path
            d="M2.8125 6.0125C2.8125 4.8924 2.8125 4.33234 3.03049 3.90452C3.22223 3.52819 3.52819 3.22223 3.90452 3.03049C4.33234 2.8125 4.89239 2.8125 6.0125 2.8125H20.9875C22.1076 2.8125 22.6677 2.8125 23.0955 3.03049C23.4718 3.22223 23.7778 3.52819 23.9695 3.90452C24.1875 4.33234 24.1875 4.89239 24.1875 6.0125V20.9875C24.1875 22.1076 24.1875 22.6677 23.9695 23.0955C23.7778 23.4718 23.4718 23.7778 23.0955 23.9695C22.6677 24.1875 22.1076 24.1875 20.9875 24.1875H6.0125C4.8924 24.1875 4.33234 24.1875 3.90452 23.9695C3.52819 23.7778 3.22223 23.4718 3.03049 23.0955C2.8125 22.6677 2.8125 22.1076 2.8125 20.9875V6.0125Z"
            stroke="#33363F"
            stroke-linecap="round"
          />
          <path
            d="M14.0625 16.9081C14.0625 19.379 11.5698 21.1019 10.551 21.7028C10.2855 21.8595 9.96451 21.8595 9.69895 21.7028C8.68022 21.1019 6.1875 19.379 6.1875 16.9081C6.1875 14.5257 8.09535 12.9375 10.125 12.9375C12.225 12.9375 14.0625 14.5257 14.0625 16.9081Z"
            stroke="#222222"
          />
          <circle cx="10.125" cy="16.875" r="1.125" fill="#222222" />
        </svg>
      );

    default:
      break;
  }
}

export default Icons;
