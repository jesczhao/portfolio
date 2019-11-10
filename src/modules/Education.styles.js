export default `
  .panel-group {
    max-width: 830px;
  }
  .education-history {
    margin-left:15px;
		margin-bottom: 30px;
  }
  .courses .panel-body {
    > div {
      margin-bottom: 10px;

      i {
        margin-right: 10px;
      }

      a {
        font-weight: normal;
      }

      > span {
        display:inline-block;
        margin-right: 5px;

        &.active a {
          font-weight: bold;
        }

        &::after {
          content: "; ";
        }
      }
    }
  }
`;