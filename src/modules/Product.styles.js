export default `
    .demos {
        margin-top: 30px;
        
        .tags {
            margin-top:5px;
            text-align: left;

            .badge {
                margin-right:5px;
            }
        }
    }

    #myBtnContainer {
        padding: 0;
        position: fixed;
        top: 60px;
        left: 65px;
        z-index: 1000;
        background: #f2f4f4;

        .btn {
            border: none;
            outline: none;
            padding: 8px 16px;
            cursor: pointer;
            color: gray;
            background-color: #eee;
            margin-bottom: 0;
            margin-right: 5px;
        }

        .btn:hover, .active {
            background-color: white;
            color: gray;
            box-shadow: none;
            font-weight: bold;
        }
    }

    .row{
        margin-top: 10px;
    }
`;