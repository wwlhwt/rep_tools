(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oBKQo1AGRRdQNfVj0EMFQ9BDBTPFBrACYBYAcxBiIBYl52W3QEbAYjA2VRDA00UGBQbAVjUWJcaQYgATpVYwNgAToKDgBoUWMDPVZnBGRUOAQxUyJQIgBsAWAHOwYLAXdecls9BDQGYgM2UXUNKVB9UCEFN1FuXCo=","r":0.35},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGlbc1lmA2cDJwBcUToDN1Q9VmEFYVZtXXsAYVBmUHQCYVlxAS5XPwYjAGZRDFBpW2sGOlI3UGEGMwUjV2wHMQBjW2BZXQNrAzEAPlFgA2NUMVZvBXRWJF0xAGFQbFBdAnRZdQFnV2IGYAAlUSdQeVt\/BmJSOFAk","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGlZcQ0yB2MDJwhUDmUANFA5BDMEYFdtBCIHZgYwACRTMA4mXHNUPFZzAGZTDlFoVGQAPFQyADAGMQosBD8ANgBjWWINCQdvAzEINg4\/AGBQNQQ2BHVXJQRoB2YGOgANUyUOIlw6VGBWMwAlUyVReFRwAGRUPgB0","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQIIF1iAWVSdgVZAmkNOVM6BzBQNAA6UXdXNlVjACQBYgEpW3RUPFRxUDZTDgY\/BzdXa1Q7XnpTOgZiAjVUZw1UCDtdYgE9UjcFNgIxDWtTIQd2UGsAY1E\/VwhVdwAkAToBaFsxVHNUdlAqUyEGMwduVyA=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoJIVlmDGgDJ1IOUjlTZ1A5BzBSMVNgUnRUNQcxW38FZgsjCSZQOA4rBGIPUlZvVmYAPFI8BT5Vc1Y\/V2EGMVM0CQxZawxpA2hSYlJgUztQMwcgUnVTPVIzVDoHClt5BXULbAljUGAOaAQhD3lWf1ZyAGRSOAVx","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Amtedgo1BGAGIgBcVD9XYwduUmVZOlBrBCIAYQM1UHQNbg4mCiVQOAciVzFTDlFoUGABPVYwUWJSYwIkBD8ANgJhXmUKDgRsBjQAPlRlVzcHYFJmWShQIgRoAGEDP1BdDXsOIgpsUGAHZFdlU3dRdVB9AXBWZFFuUiQ=","r":0.42},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0NJQA\/DWlVcQZaAWoHMwZvAjZZNgA6ACYEZQE3UXUHZA0lXHMGblN2VDIEWVZvVGQAPFYwBzdQZgAmU2habFQ3DTYABA1lVWcGOAEwB2cGZQI0WSgAcgBsBGUBPVFcB3ENIVw6BjZTM1RnBCBWclR5AHFWZAc4UCY=","r":0.44}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();