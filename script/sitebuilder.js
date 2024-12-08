// =====================================================================================================================================================================================================================================================
// new class Website ====================================================================================================================================================================================================================================
// ================================================================================================================================================================================================================================================================
// ==============================================================================================================================================================================================================================================================
class Website {
    constructor() {
        // variables
        this.body = null;
        this.bodyouter = null;
        this.state = "none";
        this.count = true;
        this.child = null;
        this.targetB = null;
        this.targetT = null;
        this.hoverbody = null;
        this.stylenum = 2;
        this.styleSheet = document.styleSheets[this.stylenum];
        this.rules = this.styleSheet.cssRules;
// loader
        this.loader = document.querySelector("#board-body-loader");
        setTimeout(() => {
            
            this.loader.style.display = "none";
        }, 1000);
        // four upper btns
        this.bodystatusdisplay = document.querySelector("#board-body-status");

        this.bodysavebtn = document.querySelector("#board-nav-div-button-menu-save");
        this.bodyhomebtn = document.querySelector("#board-nav-div-button-menu-home");

        this.menu = document.querySelector("#board-nav-menu");
        this.menu_sh = document.querySelector(".board-nav-div-button-menu");
        this.navsinglebtn = document.querySelector("#board-nav-Single");
        this.navaddbtn = document.querySelector("#board-nav-add");
        this.navhoverbtn = document.querySelector("#board-nav-hover");
        this.menu.addEventListener("click", () => {
            if (this.menu_sh.style.display != "flex") {
                this.clickbody.style.filter = "blur(5px)";
                this.menu_sh.style.display = "flex";
                let curent = 0;
                let step = 2;
                let interval = setInterval(() => {
                    curent += step
                    this.menu_sh.style.width = curent + 'vw';
                    if (curent == 20) {
                        clearInterval(interval);
                    }

                }, 10);

            } else {
                let curent = 20;
                let step = 2;
                let interval = setInterval(() => {
                    curent -= step;
                    this.menu_sh.style.width = curent + 'vw';

                    if (curent <= 0) {
                        clearInterval(interval);
                        this.menu_sh.style.display = "none";
                        this.clickbody.style.filter = "blur(0px)";
                    }

                }, 10);

            }


        })
        // add=============================================================================================================================
        this.tag = document.querySelector("#board-body-tag");
        this.classinput = document.querySelector("#board-body-class");
        this.addbtn = document.querySelector("#board-body-add");
        this.removebtn = document.querySelector("#board-body-remove");
        this.exchangebtn = document.querySelector("#board-body-exchange");
        this.resetbtn = document.querySelector("#board-body-reset");
        // size
        this.width = document.querySelector("#board-size-width-entry");
        this.widthunit = document.querySelector("#board-size-width-entry-unit");
        this.height = document.querySelector("#board-size-height-entry");
        this.heightunit = document.querySelector("#board-size-height-entry-unit");
        // border
        this.borderleft = document.querySelector("#board-border-left-entry");
        this.borderleftunit = document.querySelector("#board-border-left-entry-unit");
        this.borderright = document.querySelector("#board-border-right-entry");
        this.borderrightunit = document.querySelector("#board-border-right-entry-unit");
        this.bordertop = document.querySelector("#board-border-top-entry");
        this.bordertopunit = document.querySelector("#board-border-top-entry-unit");
        this.borderbottom = document.querySelector("#board-border-bottom-entry");
        this.borderbottomunit = document.querySelector("#board-border-bottom-entry-unit");
        this.borderradius = document.querySelector("#board-border-borderradius-entry");
        this.borderradiusunit = document.querySelector("#board-border-borderradius-entry-unit");
        this.bordercolor = document.querySelector("#board-border-bordercolor-entry");
        this.borderopticity = document.querySelector("#board-border-opticity-entry");
        this.borderstyle = document.querySelector("#board-border-borderstyle-entry");
        this.boxsizing = document.querySelector("#board-border-boxsizing-entry");
        // padding
        this.paddingleft = document.querySelector("#board-padding-left-entry");
        this.paddingleftunit = document.querySelector("#board-padding-left-entry-unit");
        this.paddingright = document.querySelector("#board-padding-right-entry");
        this.paddingrightunit = document.querySelector("#board-padding-right-entry-unit");
        this.paddingtop = document.querySelector("#board-padding-top-entry");
        this.paddingtopunit = document.querySelector("#board-padding-top-entry-unit");
        this.paddingbottom = document.querySelector("#board-padding-bottom-entry");
        this.paddingbottomunit = document.querySelector("#board-padding-bottom-entry-unit");
        // margin
        this.marginleft = document.querySelector("#board-margin-left-entry");
        this.marginleftunit = document.querySelector("#board-margin-left-entry-unit");
        this.marginright = document.querySelector("#board-margin-right-entry");
        this.marginrightunit = document.querySelector("#board-margin-right-entry-unit");
        this.margintop = document.querySelector("#board-margin-top-entry");
        this.margintopunit = document.querySelector("#board-margin-top-entry-unit");
        this.marginbottom = document.querySelector("#board-margin-bottom-entry");
        this.marginbottomunit = document.querySelector("#board-margin-bottom-entry-unit");
        // position
        this.position = document.querySelector("#board-position-position-entry");
        this.positionleft = document.querySelector("#board-position-left-entry");
        this.positionleftunit = document.querySelector("#board-position-left-entry-unit");
        this.positionright = document.querySelector("#board-position-right-entry");
        this.positionrightunit = document.querySelector("#board-position-right-entry-unit");
        this.positiontop = document.querySelector("#board-position-top-entry");
        this.positiontopunit = document.querySelector("#board-position-top-entry-unit");
        this.positionbottom = document.querySelector("#board-position-bottom-entry");
        this.positionbottomunit = document.querySelector("#board-position-bottom-entry-unit");
        this.positionzindex = document.querySelector("#board-position-zindex-entry");
        this.positionfloat = document.querySelector("#board-position-float-entry");
        this.positionclear = document.querySelector("#board-position-clear-entry");
        // display
        this.display = document.querySelector("#board-display-display-entry");
        this.displaygap = document.querySelector("#board-display-gridgap-entry");
        this.displayGTC = document.querySelector("#board-display-gridtemplatecolumns-entry");
        this.displayGTR = document.querySelector("#board-display-gridtemplaterows-entry");
        this.displayflex = document.querySelector("#board-display-flex-entry");
        this.displayflexD = document.querySelector("#board-display-flexdirection-entry");
        this.displayflexW = document.querySelector("#board-display-flexwrap-entry");
        this.displayalignC = document.querySelector("#board-display-aligncontent-entry");
        this.displayalignI = document.querySelector("#board-display-alignitems-entry");
        this.displayjustifyC = document.querySelector("#board-display-justifycontent-entry");
        this.displayjustifyI = document.querySelector("#board-display-justifyitems-entry");
        // text
        this.text = document.querySelector("#board-text-text-entry");
        this.textcolor = document.querySelector("#board-text-textcolor-entry");
        this.textopticity = document.querySelector("#board-text-textopticity-entry");
        this.textalign = document.querySelector("#board-text-textalign-entry");
        this.textdecorationline = document.querySelector("#board-text-textdecorationline-entry");
        this.textdecorationC = document.querySelector("#board-text-decorationcolor-entry");
        this.textdecorationO = document.querySelector("#board-text-decorationopticity-entry");
        this.textdecorationS = document.querySelector("#board-text-textdecorationstyle-entry");
        this.textdecorationT = document.querySelector("#board-text-textdecorationthickness-entry");
        this.textdecorationTunit = document.querySelector("#board-text-textdecorationthickness-entry-unit");
        this.texttransform = document.querySelector("#board-text-texttransform-entry");
        this.textwrap = document.querySelector("#board-text-textwrap-entry");
        // ==========================================================================
        // tabel
        this.addrow = document.querySelector("#board-table-addrows-entry");
        this.addcolumn = document.querySelector("#board-table-addcolumn-entry");
        this.removerow = document.querySelector("#board-table-removerows-entry");
        this.removecolumn = document.querySelector("#board-table-removecolumn-entry");
        // event listner
        this.addrow.addEventListener("click", () => this.addrows());
        this.addcolumn.addEventListener("click", () => this.addcolumns());
        this.removerow.addEventListener("click", () => this.removerows());
        this.removecolumn.addEventListener("click", () => this.removecolumns());


        this.table_bordercollapse = document.querySelector("#board-table-bordercollapse-entry");
        this.table_paddingnum = document.querySelector("#board-table-padding-entry");
        this.table_paddingunit = document.querySelector("#board-table-padding-entry-unit");
        this.table_text_alignment = document.querySelector("#board-table-textalign-entry");
        this.table_border = document.querySelector("#board-table-border-entry");
        this.tableheadbackgroundcolor = document.querySelector("#board-table-headbackground-entry");
        this.tableheadcolor = document.querySelector("#board-table-headcolor-entry");
        this.tableevenbackgroundcolor = document.querySelector("#board-table-evenbackground-entry");
        this.tableevencolor = document.querySelector("#board-table-evencolor-entry");
        this.tableoddbackgroundcolor = document.querySelector("#board-table-oddbackground-entry");
        this.tableoddcolor = document.querySelector("#board-table-oddcolor-entry");
        this.table = this.body;
        this.table_template = `
        <caption>caption</caption>
            <thead>
                <tr>
                    <th>head</th>
                    <th>head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>cell</td>
                <td>cell</td>
                </tr>
                </tbody>
                `;
        this.columncontent = `<td>empty</td>`;
        // ==========================================================================
        // background
        this.backgroundcolor = document.querySelector("#board-background-backgroundcolor-entry");
        this.backgroundopticity = document.querySelector("#board-background-backgroundopticity-entry");
        this.backgroundimg = document.querySelector("#board-background-backgroundimg-entry");
        this.backgroundsize = document.querySelector("#board-background-size-entry");
        this.backgroundposition = document.querySelector("#board-background-position-entry");
        this.backgroundrepeat = document.querySelector("#board-background-repeat-entry");
        this.backgroundblendmode = document.querySelector("#board-background-blendmode-entry");
        this.backgroundmixblendmode = document.querySelector("#board-background-mixblendmode-entry");
        // font
        this.fontsize = document.querySelector("#board-font-size-entry");
        this.fontsizeunit = document.querySelector("#board-font-size-entry-unit");
        this.fontfamily = document.querySelector("#board-font-family-entry");
        this.fontstyle = document.querySelector("#board-font-style-entry");
        this.fontweight = document.querySelector("#board-font-weight-entry");
        this.fontweight = document.querySelector("#board-font-weight-entry");
        this.fontlineheight = document.querySelector("#board-font-lineheight-entry");
        this.fontlineheightunit = document.querySelector("#board-font-lineheight-entry-unit");
        // list
        this.listtype = document.querySelector("#board-list-styletype-entry");
        this.listposition = document.querySelector("#board-list-styleposition-entry");
        this.listimg = document.querySelector("#board-list-styleimg-entry");
        // input outerpropetys
        this.inputtype = document.querySelector("#board-input-type-entry");
        this.inputplaceholder = document.querySelector("#board-input-placeholder-entry");
        this.inputmin = document.querySelector("#board-input-min-entry");
        this.inputmax = document.querySelector("#board-input-max-entry");
        this.inputstep = document.querySelector("#board-input-step-entry");
        this.inputvalue = document.querySelector("#board-input-value-entry");
        this.inputlink = document.querySelector("#board-input-link-entry");
        this.inputfor = document.querySelector("#board-input-for-entry");
        this.inputsrc = document.querySelector("#board-input-src-entry");
        // transform
        this.transformTX = document.querySelector("#board-transform-translateX-entry");
        this.transformTXunit = document.querySelector("#board-transform-translateX-entry-unit");
        this.transformTY = document.querySelector("#board-transform-translateY-entry");
        this.transformTYunit = document.querySelector("#board-transform-translateY-entry-unit");
        this.transformTZ = document.querySelector("#board-transform-translateZ-entry");
        this.transformTZunit = document.querySelector("#board-transform-translateZ-entry-unit");
        this.transformSX = document.querySelector("#board-transform-scaleX-entry");
        this.transformSY = document.querySelector("#board-transform-scaleY-entry");
        this.transformSZ = document.querySelector("#board-transform-scaleZ-entry");
        this.transformRX = document.querySelector("#board-transform-rotateX-entry");
        this.transformRY = document.querySelector("#board-transform-rotateY-entry");
        this.transformRZ = document.querySelector("#board-transform-rotateZ-entry");
        this.transformSKX = document.querySelector("#board-transform-skewX-entry");
        this.transformSKY = document.querySelector("#board-transform-skewY-entry");
        this.transformP = document.querySelector("#board-transform-perspective-entry");
        // transition
        this.transitionduration = document.querySelector("#board-transition-duration-entry");
        this.transitionproperty = document.querySelector("#board-transition-property-entry");
        this.transitiontimingfunction = document.querySelector("#board-transition-timingfunction-entry");
        this.transitioncursor = document.querySelector("#board-transition-cursor-entry");
        this.transitionvisibility = document.querySelector("#board-transition-visibility-entry");
        this.transitionoverflowx = document.querySelector("#board-transition-overflowx-entry");
        this.transitionoverflowy = document.querySelector("#board-transition-overflowy-entry");
        this.transitionclippath = document.querySelector("#board-transition-clippath-entry");
        // box shadow
        this.boxshadowx = document.querySelector("#board-boxshadow-x-entry");
        this.boxshadowxdis = document.querySelector("#board-boxshadow-x-entry-display");
        this.boxshadowy = document.querySelector("#board-boxshadow-y-entry");
        this.boxshadowydis = document.querySelector("#board-boxshadow-y-entry-display");
        this.boxshadowblur = document.querySelector("#board-boxshadow-blur-entry");
        this.boxshadowblurdis = document.querySelector("#board-boxshadow-blur-entry-display");
        this.boxshadowspread = document.querySelector("#board-boxshadow-spread-entry");
        this.boxshadowspreaddis = document.querySelector("#board-boxshadow-spread-entry-display");
        this.boxshadowcolor = document.querySelector("#board-boxshadow-shadowcolor-entry");
        this.boxshadowopticity = document.querySelector("#board-boxshadow-shadowopticity-entry");

        // all boxes ==================================================================
        this.clickbody = document.querySelector("#body");
        this.board = document.querySelector("#board");
        this.addbox = document.querySelector("#board-addbox");
        this.hoverbox = document.querySelector("#board-hoverbox");
        this.sizebox = document.querySelector("#board-sizebox");
        this.borderbox = document.querySelector("#board-borderbox");
        this.paddingbox = document.querySelector("#board-paddingbox");
        this.marginbox = document.querySelector("#board-marginbox");
        this.positionbox = document.querySelector("#board-positionbox");
        this.displaybox = document.querySelector("#board-displaybox");
        this.textbox = document.querySelector("#board-textbox");
        this.tablebox = document.querySelector("#board-tablebox");
        this.backgroundbox = document.querySelector("#board-backgroundbox");
        this.fontbox = document.querySelector("#board-fontbox");
        this.listbox = document.querySelector("#board-listbox");
        this.inputbox = document.querySelector("#board-inputbox");
        this.transitionbox = document.querySelector("#board-transitionbox");
        this.boxshadowbox = document.querySelector("#board-boxshadowbox");
        this.transformbox = document.querySelector("#board-transformbox");

        // =============================================fix variable end==============================================
        // upper btns events
        this.navaddbtn.addEventListener("click", () => {
            this.state = "none";
            this.bodystatusdisplay.innerText = "ADD"
        });
        this.navhoverbtn.addEventListener("click", () => {
            this.state = "hover";
            this.bodystatusdisplay.innerText = "HOVER"
        });
        this.navsinglebtn.addEventListener("click", () => {
            this.state = "single";
            this.bodystatusdisplay.innerText = "SINGLE"
        });
        // addbox events=======================================================
        this.addbtn.addEventListener("click", () => {
            this.state = "add";
        });
        this.removebtn.addEventListener("click", () => {
            this.state = "remove";
        });
        this.exchangebtn.addEventListener("click", () => {
            this.state = "exchange";
        });
        this.resetbtn.addEventListener("click", () => {
            this.bodyouter.style = "";
        });
        // webpage events
        this.clickbody.addEventListener("click", (event) => {
            this.bodyouter = event.target;
            this.body = event.target;
            if (this.state != "single") {
                this.hoverbody = this.addhover(this.body);

            }
            this.fetchclass();
            this.fetchcss();
        })
        this.clickbody.addEventListener("mousemove", (event) => this.tracker(event))
        this.clickbody.addEventListener("click", (event) => this.add_remove_element(event));
        // board events
        this.board.addEventListener("click", () => {
            this.targetT.style.backgroundColor = this.targetB;
        })

        this.bodysavebtn.addEventListener("click", () => this.downloadpage());
        this.bodyhomebtn.addEventListener("click", () => {
            window.location.href = "index.html";
        })
        // function calls 
        this.runcss();
        this.tagadder([this.tag]);
        this.unitadder([this.widthunit, this.heightunit, this.borderleftunit, this.borderrightunit, this.borderbottomunit, this.bordertopunit, this.borderradiusunit, this.paddingleftunit, this.paddingrightunit, this.paddingbottomunit, this.paddingtopunit, this.marginleftunit, this.marginrightunit, this.marginbottomunit, this.margintopunit, this.positionleftunit, this.positionrightunit, this.positionbottomunit, this.positiontopunit, this.textdecorationTunit, this.table_paddingunit, this.fontsizeunit, this.fontlineheightunit, this.transformTXunit, this.transformTYunit, this.transformTZunit]);

    }
    downloadpage(){
        let content = document.createElement('p');
        let html = document.createElement('html');
        html.lang = "en";
        let head = document.createElement('head');
        head.innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>`;
        let style = document.querySelectorAll("style");
        let styletemp = document.createElement("style");
        styletemp.innerHTML = style[0].innerHTML;
        head.appendChild(styletemp);
        let body = document.createElement('body');
        body.innerHTML = this.clickbody.innerHTML;
        body.className = "webpage";
        html.appendChild(head);
        html.appendChild(body);
        content.appendChild(html);

        // let temp = document.createElement('p');
        // temp.innerText = content.innerHTML;

        // var newWindow = window.open('', '_blank');

        // newWindow.document.write(content.innerHTML);

        // newWindow.document.close();
        var blob = new Blob([content.innerHTML], {type: 'text/html'});
        
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'sitebuilder-downloadpage.html';
        
        link.click();
    }

    // add and remove and exchange function///////////////////////////////////////////////////////////
    add_remove_element(event) {
        if (this.state == "add") {
            let newbody = document.createElement(this.tag.value);
            if (this.tag.value == 'img') {
                newbody.src = "https://picsum.photos/seed/picsum/100/100"
            } else if (this.tag.value == 'table') {

                newbody.innerHTML = this.table_template;
            }
            else {
                newbody.innerText = this.tag.value;

            }
            newbody.className = `${event.target.className}-${this.tag.value}`;
            newbody.style.backgroundColor = `rgb(${this.getRandomInt(200, 250)},${this.getRandomInt(200, 250)},${this.getRandomInt(200, 250)})`

            event.target.appendChild(newbody);
            this.state = "none";
        }
        else if (this.state == "remove") {
            if (event.target.id != "body") {
                event.target.remove();

            }
            this.state = "none";
        }
        if (this.state == "exchange") {
            this.body = event.target;
            if (this.count) {

                this.child = this.body;
                this.count = false;
            }
            else {
                this.state = "none";
                this.count = true;
                if (this.child.parentNode) {
                    this.child.parentNode.removeChild(this.child);
                }
                this.body.appendChild(this.child);

            }
        }

    }

    tracker(event) {

        if (this.targetB == null) {
            this.borderB = event.target.style.backgroundColor;
        }

        if (this.targetT != event.target && this.targetT != null) {
            this.targetT.style.backgroundColor = this.targetB;
            this.targetB = event.target.style.backgroundColor;
            this.targetT = event.target;
        }
        else if (this.targetT == null) {
            this.targetT = event.target;
        }
        event.target.style.backgroundColor = '#ff000010';
        if (this.clickbody.style.position == "absolute") {
            this.clickbody.style.position = "relative";
            alert("main body is not convert into absolute!Error");
        }
    }
    runcss() {
        this.classinput.addEventListener("input", () => this.runclass());
        this.board.addEventListener("input", () => this.applycsschange());


        this.sizebox.addEventListener("input", () => this.runcsssize());
        this.borderbox.addEventListener("input", () => this.runcssborder());
        this.paddingbox.addEventListener("input", () => this.runcsspadding());
        this.marginbox.addEventListener("input", () => this.runcssmargin());
        this.positionbox.addEventListener("input", () => this.runcssposition());
        this.displaybox.addEventListener("input", () => this.runcssdisplay());
        this.textbox.addEventListener("input", () => this.runcsstext());
        this.tablebox.addEventListener("input", () => this.runcsstable());
        this.backgroundbox.addEventListener("input", () => this.runcssbackground());
        this.fontbox.addEventListener("input", () => this.runcssfont());
        this.listbox.addEventListener("input", () => this.runcsslist());
        this.inputbox.addEventListener("input", () => this.runcssinput());
        this.transitionbox.addEventListener("input", () => this.runcsstransition());
        this.boxshadowbox.addEventListener("input", () => this.runcssboxshadow());
        this.transformbox.addEventListener("input", () => this.runcsstransform());



    }
    applycsschange(){
        let rules = this.rules;
        let cssText = '';

        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i];
            if (rule.type === CSSRule.STYLE_RULE) {
                cssText += rule.cssText + '\n';
            }
        }

        // Create a style tag and set its innerHTML
        let styleTag = document.querySelectorAll('style');
        styleTag[0].innerHTML = cssText;
    }
    fetchcss() {
        if (this.body.tagName.toLowerCase() == "table") {
            this.table = this.body;
            this.tablebox.style.display = "grid";
            this.fetchcsstable();

        }
        else if (this.state != "single") {


            this.tablebox.style.display = "none";
            let styleSheet = document.styleSheets[this.stylenum];
            this.rules = styleSheet.cssRules;
            this.body = this.rules[this.hoverbody];

        }

        // this.fetchclass();
        this.fetchcsssize();
        this.fetchcssborder();
        this.fetchcsspadding();
        this.fetchcssmargin();
        this.fetchcssposition();
        this.fetchcssdisplay();
        this.fetchcsstext();
        this.fetchcssbackground();
        this.fetchcssfont();
        this.fetchcsslist();
        this.fetchcssinput();
        this.fetchcsstransition();
        this.fetchcssboxshadow();
        this.fetchcsstransform();
    }
    addhover(target) {
        this.styleSheet = document.styleSheets[this.stylenum];
        this.rules = this.styleSheet.cssRules;
        let classname = target.className;
        let style = document.querySelectorAll('style');
        if (this.state == 'hover') {
            for (let i = 0; i < this.rules.length; i++) {
                if (this.rules[i].selectorText == `.${target.className}:hover`) {
                    return i;
                }

            }

            if (classname != "" || classname != undefined) {
                style[1].innerHTML += `.${classname}:hover{color:red;}`;
                return this.rules.length;

            } else {
                alert("class name is not define!")
            }
        }
        else if (this.state == 'none') {
            for (let i = 0; i < this.rules.length; i++) {
                if (this.rules[i].selectorText == `.${target.className}`) {
                    return i;
                }

            }

            if (classname != "") {
                style[0].innerHTML += `.${classname}{color:rgb(0,0,0);}`;
                return this.rules.length;

            } else {
                alert("class name is not define!")
            }

        }

    }
    // mini functions ===============================================
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    parseTransformString(transformString) {
        const regex = /([a-zA-Z]+)\((-?\d+(\.\d+)?)(px|deg)?\)/g;
        const result = [];
        let match;
        while ((match = regex.exec(transformString)) !== null) {
            const [fullMatch, transformType, value, decimal, unit] = match;
            let defaultValue = 0;
            let defaultUnit = unit || '';
            switch (transformType) {
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                    result.push(parseFloat(value) || defaultValue);
                    result.push(unit || 'px');
                    break;
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    result.push(parseFloat(value) || defaultValue);
                    break;
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                case 'skewX':
                case 'skewY':
                    result.push(parseFloat(value) || defaultValue);
                    result.push(unit || 'deg');
                    break;
                case 'perspective':
                    result.push(parseFloat(value) || defaultValue);
                    result.push(unit || 'px');
                    break;
                default:
                    break;
            }
        }

        return result;
    }
    hex(value) {

        let data = { 10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f" }
        let a = value % 16;
        let b = Math.floor(value / 16);
        if (data[a]) {
            a = data[a];
        }
        if (data[b]) {
            b = data[b];
        }
        return `${b}${a}`;
    }
    hexToRgb(hex) {
        hex = hex.replace(/^#/, "");
        if (hex.length === 3) {
            hex = hex.split("").map(function (c) { return c + c; }).join("");
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return [r, g, b];
    }
    valueorzero(value) {
        if (value == undefined || value == null) {
            return "0";
        }
        return value;
    }
    valueorone(value) {
        if (value == undefined || value == null) {
            return "1";
        }
        return value;
    }
    // end =================================================================
    //  dont touch ===========================================================================================================\/===
    runclass() {
        this.bodyouter.className = this.classinput.value;
    }
    fetchclass() {
        if (this.bodyouter.className) {

            this.classinput.value = this.bodyouter.className;
        } else {

            this.classinput.value = "";
        }
    }
    runcsssize() {

        this.body.style.width = this.width.value + this.widthunit.value;
        this.body.style.height = this.height.value + this.heightunit.value;

    }
    fetchcsssize() {
        this.width.value = this.body.style.width.replace(/([a-z]|%)/g, "");
        this.widthunit.value = this.body.style.width.replace(/\d+/g, "");
        this.height.value = this.body.style.height.replace(/([a-z]|%)/g, "");
        this.heightunit.value = this.body.style.height.replace(/\d+/g, "");
    }
    runcssborder() {
        let rgb = this.hexToRgb(this.bordercolor.value);
        this.body.style.borderLeft = `${this.borderleft.value}${this.borderleftunit.value} ${this.borderstyle.value} rgba(${rgb[0]} ,${rgb[1]}, ${rgb[2]}, ${this.borderopticity.value})`;
        this.body.style.borderRight = `${this.borderright.value}${this.borderradiusunit.value} ${this.borderstyle.value} rgba(${rgb[0]} ,${rgb[1]}, ${rgb[2]}, ${this.borderopticity.value})`;
        this.body.style.borderBottom = `${this.borderbottom.value}${this.borderbottomunit.value} ${this.borderstyle.value} rgba(${rgb[0]} ,${rgb[1]}, ${rgb[2]}, ${this.borderopticity.value})`;
        this.body.style.borderTop = `${this.bordertop.value}${this.bordertopunit.value} ${this.borderstyle.value} rgba(${rgb[0]} ,${rgb[1]}, ${rgb[2]}, ${this.borderopticity.value})`;
        this.body.style.borderRadius = `${this.borderradius.value}${this.borderradiusunit.value}`;
        this.body.style.boxSizing = `${this.boxsizing.value}`;
    }
    fetchcssborder() {

        this.borderleft.value = this.valueorzero(this.body.style.borderLeft.match(/\d+/g))[0];
        this.borderleftunit.value = this.valueorzero(this.body.style.borderLeft.match(/([a-z]|%)+/g))[0];
        this.borderright.value = this.valueorzero(this.body.style.borderRight.match(/\d+/g))[0];
        this.borderrightunit.value = this.valueorzero(this.body.style.borderRight.match(/([a-z]|%)+/g))[0];
        this.borderbottom.value = this.valueorzero(this.body.style.borderBottom.match(/\d+/g))[0];
        this.borderbottomunit.value = this.valueorzero(this.body.style.borderBottom.match(/([a-z]|%)+/g))[0];
        this.bordertop.value = this.valueorzero(this.body.style.borderTop.match(/\d+/g))[0];
        this.bordertopunit.value = this.valueorzero(this.body.style.borderTop.match(/([a-z]|%)+/g))[0];
        this.borderradius.value = this.valueorzero(this.body.style.borderRadius.match(/\d+/g))[0];
        this.borderradiusunit.value = this.valueorzero(this.body.style.borderRadius.match(/([a-z]|%)+/g))[0];
        this.borderstyle.value = this.body.style.borderStyle;
        this.boxsizing.value = this.body.style.boxSizing;
        let color = this.body.style.borderColor.match(/\d+(\.\d+)?/g);
        if (color != null) {

            this.bordercolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
            this.borderopticity.value = this.valueorone(color[3]);
        }

    }

    runcsspadding() {
        this.body.style.paddingLeft = this.paddingleft.value + this.paddingleftunit.value;
        this.body.style.paddingRight = this.paddingright.value + this.paddingrightunit.value;
        this.body.style.paddingBottom = this.paddingbottom.value + this.paddingbottomunit.value;
        this.body.style.paddingTop = this.paddingtop.value + this.paddingtopunit.value;
    }
    fetchcsspadding() {
        this.paddingleft.value = this.valueorzero(this.body.style.paddingLeft.replace(/([a-z]|%)/g, ""));
        this.paddingleftunit.value = this.valueorzero(this.body.style.paddingLeft.replace(/\d+/g, ""));
        this.paddingright.value = this.valueorzero(this.body.style.paddingRight.replace(/([a-z]|%)/g, ""));
        this.paddingrightunit.value = this.valueorzero(this.body.style.paddingRight.replace(/\d+/g, ""));
        this.paddingbottom.value = this.valueorzero(this.body.style.paddingBottom.replace(/([a-z]|%)/g, ""));
        this.paddingbottomunit.value = this.valueorzero(this.body.style.paddingBottom.replace(/\d+/g, ""));
        this.paddingtop.value = this.valueorzero(this.body.style.paddingTop.replace(/([a-z]|%)/g, ""));
        this.paddingtopunit.value = this.valueorzero(this.body.style.paddingTop.replace(/\d+/g, ""));
    }

    runcssmargin() {
        this.body.style.marginLeft = this.marginleft.value + this.marginleftunit.value;
        this.body.style.marginRight = this.marginright.value + this.marginrightunit.value;
        this.body.style.marginBottom = this.marginbottom.value + this.marginbottomunit.value;
        this.body.style.marginTop = this.margintop.value + this.margintopunit.value;
    }
    fetchcssmargin() {
        this.marginleft.value = this.valueorzero(this.body.style.marginLeft.replace(/([a-z]|%)/g, ""));
        this.marginleftunit.value = this.valueorzero(this.body.style.marginLeft.replace(/\d+/g, ""));
        this.marginright.value = this.valueorzero(this.body.style.marginRight.replace(/([a-z]|%)/g, ""));
        this.marginrightunit.value = this.valueorzero(this.body.style.marginRight.replace(/\d+/g, ""));
        this.marginbottom.value = this.valueorzero(this.body.style.marginBottom.replace(/([a-z]|%)/g, ""));
        this.marginbottomunit.value = this.valueorzero(this.body.style.marginBottom.replace(/\d+/g, ""));
        this.margintop.value = this.valueorzero(this.body.style.marginTop.replace(/([a-z]|%)/g, ""));
        this.margintopunit.value = this.valueorzero(this.body.style.marginTop.replace(/\d+/g, ""));
    }

    runcssposition() {
        this.body.style.position = this.position.value;
        this.body.style.left = this.positionleft.value + this.positionleftunit.value;
        this.body.style.right = this.positionright.value + this.positionrightunit.value;
        this.body.style.bottom = this.positionbottom.value + this.positionbottomunit.value;
        this.body.style.top = this.positiontop.value + this.positiontopunit.value;
        this.body.style.zIndex = this.positionzindex.value;
        this.body.style.float = this.positionfloat.value;
        this.body.style.clear = this.positionclear.value;
    }
    fetchcssposition() {
        this.positionleft.value = this.valueorzero(this.body.style.left.replace(/([a-z]|%)/g, ""));
        this.positionleftunit.value = this.valueorzero(this.body.style.left.replace(/\d+/g, ""));
        this.positionright.value = this.valueorzero(this.body.style.right.replace(/([a-z]|%)/g, ""));
        this.positionrightunit.value = this.valueorzero(this.body.style.right.replace(/\d+/g, ""));
        this.positionbottom.value = this.valueorzero(this.body.style.bottom.replace(/([a-z]|%)/g, ""));
        this.positionbottomunit.value = this.valueorzero(this.body.style.bottom.replace(/\d+/g, ""));
        this.positiontop.value = this.valueorzero(this.body.style.top.replace(/([a-z]|%)/g, ""));
        this.positiontopunit.value = this.valueorzero(this.body.style.top.replace(/\d+/g, ""));
    }
    runcssdisplay() {
        this.body.style.display = this.display.value;
        this.body.style.gridGap = this.displaygap.value;
        this.body.style.gridTemplateColumns = this.displayGTC.value;
        this.body.style.gridTemplateRows = this.displayGTR.value;
        this.body.style.flex = this.displayflex.value;
        this.body.style.flexDirection = this.displayflexD.value;
        this.body.style.flexWrap = this.displayflexW.value;
        this.body.style.alignContent = this.displayalignC.value;
        this.body.style.alignItems = this.displayalignI.value;
        this.body.style.justifyContent = this.displayjustifyC.value;
        this.body.style.justifyItems = this.displayjustifyI.value;
    }

    fetchcssdisplay() {
        this.display.value = this.body.style.display;
        this.displaygap.value = this.body.style.gridGap;
        this.displayGTC.value = this.body.style.gridTemplateColumns;
        this.displayGTR.value = this.body.style.gridTemplateRows;
        this.displayflex.value = this.body.style.flex;
        this.displayflexD.value = this.body.style.flexDirection;
        this.displayflexW.value = this.body.style.flexWrap;
        this.displayalignC.value = this.body.style.alignContent;
        this.displayalignI.value = this.body.style.alignItems;
        this.displayjustifyC.value = this.body.style.justifyContent;
        this.displayjustifyI.value = this.body.style.justifyItems;
    }

    runcsstext() {
        let rgb = this.hexToRgb(this.textcolor.value);
        this.body.style.color = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${this.textopticity.value})`
        this.bodyouter.innerHTML = this.text.value;
        this.body.style.textAlign = this.textalign.value;
        this.body.style.textDecorationLine = this.textdecorationline.value;
        rgb = this.hexToRgb(this.textdecorationC.value);
        this.body.style.textDecorationColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${this.textdecorationO.value})`
        this.body.style.textDecorationStyle = this.textdecorationS.value;
        this.body.style.textDecorationThickness = this.textdecorationT.value;
        this.body.style.textTransform = this.texttransform.value;
        this.body.style.textWrap = this.textwrap.value;
    }
    fetchcsstext() {
        let color = this.body.style.color.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.textcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
            this.textopticity.value = this.valueorone(color[3]);
        }
        color = this.body.style.textDecorationColor.match(/\d+(\.\d+)?/g);
        if (color != null) {

            this.textdecorationC.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
            this.textdecorationO.value = this.valueorone(color[3]);
        }

        this.text.value = this.bodyouter.innerHTML;
        this.textalign.value = this.body.style.textAlign;
        this.textdecorationline.value = this.body.style.textDecorationLine;
        this.textdecorationS.value = this.body.style.textDecorationStyle;
        this.textdecorationT.value = this.body.style.textDecorationThickness;
        this.texttransform.value = this.body.style.textTransform;
        this.textwrap.value = this.body.style.textWrap;
    }
    runcsstable() {
        this.body.style.borderCollapse = this.table_bordercollapse.value;
        let tableth = this.table.querySelectorAll("th");
        tableth.forEach(head => {

            head.style.padding = this.table_paddingnum.value + this.table_paddingunit.value;
            head.style.textAlign = this.table_text_alignment.value;
            head.style.borderLeft = this.table_border.value;
            head.style.borderRight = this.table_border.value;
            head.style.borderBottom = this.table_border.value;
            head.style.borderTop = this.table_border.value;
            head.style.background = this.tableheadbackgroundcolor.value;
            head.style.color = this.tableheadcolor.value;
        })
        let tabletd = this.table.querySelectorAll("td");
        tabletd.forEach(head => {
            head.style.padding = this.table_paddingnum.value + this.table_paddingunit.value;
            head.style.textAlign = this.table_text_alignment.value;
            head.style.borderLeft = this.table_border.value;
            head.style.borderRight = this.table_border.value;
            head.style.borderBottom = this.table_border.value;
            head.style.borderTop = this.table_border.value;
        })
        let tabeltr = this.table.querySelectorAll("tr");

        for (let index = 0; index < tabeltr.length; index++) {
            if (index % 2 == 0) {
                tabeltr.item(index).style.color = this.tableevencolor.value;
                tabeltr.item(index).style.background = this.tableevenbackgroundcolor.value;
            } else {
                tabeltr.item(index).style.color = this.tableoddcolor.value;
                tabeltr.item(index).style.background = this.tableoddbackgroundcolor.value;

            }

        };
    }
    addrows() {
        let count = this.table.querySelector("tr").childElementCount;
        let a = document.createElement("tr");
        for (let i = 0; i < count; i++) {
            let c = document.createElement('td');
            c.innerText = "empty"
            a.appendChild(c);

        }
        let b = this.table.querySelector("tbody");
        b.appendChild(a);
        this.fetchentry();
    }
    addcolumns() {
        let col = this.table.querySelectorAll("tr");
        col.forEach(column => {
            column.innerHTML += this.columncontent;
        })
        this.fetchentry();
    }
    removerows() {
        let tbody = this.table.querySelector("tbody");
        if (tbody.rows.length > 0) {
            tbody.deleteRow(tbody.rows.length - 1); // Remove last row
        }
    }
    removecolumns() {
        let rows = this.table.querySelectorAll("tr");
        rows.forEach(row => {
            if (row.cells.length > 0) {
                row.deleteCell(row.cells.length - 1); // Remove last column
            }
        });
    }
    fetchcsstable() {
        this.table_bordercollapse.value = this.body.style.borderCollapse;

        let tableth = this.table.querySelector("th");
        this.table_paddingnum.value = tableth.style.padding.replace(/\D/g, "");
        this.table_paddingunit = tableth.style.padding.replace(/[0-9]/g, "");
        this.table_text_alignment.value = tableth.style.textAlign;
        this.table_border.value = tableth.style.borderLeft;

        let color = tableth.style.backgroundColor.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.tableheadbackgroundcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
        }
        color = tableth.style.color.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.tableheadcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
        }
        let tabeltr = this.table.querySelectorAll("tr");
        color = tabeltr.item(0).style.color.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.tableevencolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
        }
        color = tabeltr.item(0).style.background.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.tableevenbackgroundcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
        }

        color = tabeltr.item(1).style.color.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.tableoddcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
        }
        color = tabeltr.item(1).style.background.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.tableoddbackgroundcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
        }



    }
    runcssbackground() {
        let rgb = this.hexToRgb(this.backgroundcolor.value);
        this.body.style.backgroundColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${this.backgroundopticity.value})`
        this.body.style.backgroundImage = `url(${this.backgroundimg.value})`;
        this.body.style.backgroundSize = this.backgroundsize.value;
        this.body.style.backgroundPosition = this.backgroundposition.value;
        this.body.style.backgroundRepeat = this.backgroundrepeat.value;
        this.body.style.backgroundBlendMode = this.backgroundblendmode.value;
        this.body.style.mixBlendMode = this.backgroundmixblendmode.value;
    }
    fetchcssbackground() {
        let color = this.body.style.backgroundColor.match(/\d+(\.\d+)?/g);
        if (color != null) {
            this.backgroundcolor.value = `#${this.hex(color[0])}${this.hex(color[1])}${this.hex(color[2])}`;
            this.backgroundopticity.value = this.valueorone(color[3]);
        }
        this.backgroundimg.value = this.body.style.backgroundImage;
        this.backgroundsize.value = this.body.style.backgroundSize;
        this.backgroundposition.value = this.body.style.backgroundPosition;
        this.backgroundrepeat.value = this.body.style.backgroundRepeat;
        this.backgroundblendmode.value = this.body.style.backgroundBlendMode;
        this.backgroundmixblendmode.value = this.body.style.mixBlendMode;

    }
    runcssfont() {
        this.body.style.fontSize = this.fontsize.value + this.fontsizeunit.value;
        this.body.style.fontFamily = this.fontfamily.value;
        this.body.style.fontStyle = this.fontstyle.value;
        this.body.style.fontWeight = this.fontweight.value;
        this.body.style.lineHeight = this.fontlineheight.value + this.fontlineheightunit.value;
    }
    fetchcssfont() {
        this.fontsize.value = this.body.style.fontSize.replace(/([a-z]|%)/g, "");
        this.fontsizeunit.value = this.body.style.fontSize.replace(/\d+/g, "");
        this.fontfamily.value = this.body.style.fontFamily;
        this.fontstyle.value = this.body.style.fontStyle;
        this.fontweight.value = this.body.style.fontWeight;
        this.fontlineheight.value = this.body.style.lineHeight.replace(/([a-z]|%)/g, "");
        this.fontlineheightunit.value = this.body.style.lineHeight.replace(/\d+/g, "");
    }
    runcsslist() {
        this.body.style.listStyleType = this.listtype.value;
        this.body.style.listStylePosition = this.listposition.value;
        this.body.style.listStyleImage = `url(${this.listimg.value})`;
    }
    fetchcsslist() {
        this.listtype.value = this.body.style.listStyleType;
        this.listposition.value = this.body.style.listStylePosition;
        this.listimg.value = this.body.style.listStyleImage;
    }
    runcssinput() {
        this.bodyouter.type = this.inputtype.value;
        this.bodyouter.placeholder = this.inputplaceholder.value;
        this.bodyouter.min = this.inputmin.value;
        this.bodyouter.max = this.inputmax.value;
        this.bodyouter.step = this.inputstep.value;
        this.bodyouter.value = this.inputvalue.value;
        this.bodyouter.link = this.inputlink.value;
        this.bodyouter.for = this.inputfor.value;
        this.bodyouter.src = this.inputsrc.value;
    }
    fetchcssinput() {
        this.inputtype.value = this.bodyouter.type;
        this.inputplaceholder.value = this.bodyouter.placeholder;
        this.inputmin.value = this.bodyouter.min;
        this.inputmax.value = this.bodyouter.max;
        this.inputstep.value = this.bodyouter.step;
        this.inputvalue.value = this.bodyouter.value;
        this.inputlink.value = this.bodyouter.link;
        this.inputfor.value = this.bodyouter.for;
        this.inputsrc.value = this.bodyouter.src;
    }
    runcsstransition() {
        this.body.style.transitionDuration = this.transitionduration.value;
        this.body.style.transitionProperty = this.transitionduration.value;
        this.body.style.transitionTimingFunction = this.transitionduration.value;
        this.body.style.cursor = this.transitioncursor.value;
        this.body.style.visibility = this.transitionvisibility.value;
        this.body.style.overflowX = this.transitionoverflowx.value;
        this.body.style.overflowY = this.transitionoverflowy.value;
        this.body.style.clipPath = this.transitionclippath.value;


    }
    fetchcsstransition() {
        this.transitionduration.value = this.body.style.transitionDuration;
        this.transitionduration.value = this.body.style.transitionProperty;
        this.transitionduration.value = this.body.style.transitionTimingFunction;
        this.transitioncursor.value = this.body.style.cursor;
        this.transitionvisibility.value = this.body.style.visibility;
        this.transitionoverflowx.value = this.body.style.overflowX;
        this.transitionoverflowy.value = this.body.style.overflowY;
        this.transitionclippath.value = this.body.style.clipPath;
    }
    fetchcsstransform() {
        let data = this.parseTransformString(this.body.style.transform);

        this.transformTX.value = this.valueorzero(data[0]);
        this.transformTXunit.value = this.valueorzero(data[1]);
        this.transformTY.value = this.valueorzero(data[2]);
        this.transformTYunit.value = this.valueorzero(data[3]);
        this.transformTZ.value = this.valueorzero(data[4]);
        this.transformTZunit.value = this.valueorzero(data[5]);
        this.transformSX.value = this.valueorone(data[6]);
        this.transformSY.value = this.valueorone(data[7]);
        this.transformSZ.value = this.valueorone(data[8]);
        this.transformRX.value = this.valueorzero(data[9]);
        this.transformRY.value = this.valueorzero(data[11]);
        this.transformRZ.value = this.valueorzero(data[13]);
        this.transformSKX.value = this.valueorzero(data[15]);
        this.transformSKY.value = this.valueorzero(data[17]);
        this.transformP.value = this.valueorzero(data[19]);


    }
    runcsstransform() {
        this.body.style.transform = `
        translateX(${this.valueorzero(this.transformTX.value)}${this.transformTXunit.value}) 
        translateY(${this.valueorzero(this.transformTY.value)}${this.transformTYunit.value}) 
        translateZ(${this.valueorzero(this.transformTZ.value)}${this.transformTZunit.value}) 
        scaleX(${this.valueorone(this.transformSX.value)}) 
        scaleY(${this.valueorone(this.transformSY.value)}) 
        scaleZ(${this.valueorone(this.transformSZ.value)}) 
        rotateX(${this.valueorzero(this.transformRX.value)}deg) 
        rotateY(${this.valueorzero(this.transformRY.value)}deg) 
        rotateZ(${this.valueorzero(this.transformRZ.value)}deg) 
        skewX(${this.valueorzero(this.transformSKX.value)}deg) 
        skewY(${this.valueorzero(this.transformSKY.value)}deg) 
        perspective(${this.valueorzero(this.transformP.value)})`;

        let main = document.querySelectorAll(".board-body-div2-div");
        main.forEach(div => {
            try {
                let a = div.querySelector("input");
                if (a.type == "range") {
                    if (a.max == "10") {
                        div.querySelector("p").innerText = a.value + "px";

                    } else {

                        div.querySelector("p").innerText = a.value + "deg";
                    }
                }

            } catch (error) {
                console.log(error);
            }
        })


    }
    runcssboxshadow() {
        this.boxshadowxdis.innerHTML = this.boxshadowx.value;
        this.boxshadowydis.innerHTML = this.boxshadowy.value;
        this.boxshadowblurdis.innerHTML = this.boxshadowblur.value;
        this.boxshadowspreaddis.innerHTML = this.boxshadowspread.value;
        let rgb = this.hexToRgb(this.boxshadowcolor.value);
        this.body.style.boxShadow = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${this.boxshadowopticity.value}) ${this.boxshadowx.value}px ${this.boxshadowy.value}px ${this.boxshadowblur.value}px ${this.boxshadowspread.value}px`;


    }
    fetchcssboxshadow() {
        let data = this.body.style.boxShadow.match(/(\d+)(\.\d+)?/g);
        if (data != null) {
            let mid = Math.floor(data.length / 2);
            let firstHalf = data.slice(0, mid);
            let secondHalf = data.slice(mid);
            this.boxshadowx.value = secondHalf[0];
            this.boxshadowxdis.innerHTML = this.boxshadowx.value;
            this.boxshadowy.value = secondHalf[1];
            this.boxshadowydis.innerHTML = this.boxshadowy.value;
            this.boxshadowblur.value = secondHalf[2];
            this.boxshadowblurdis.innerHTML = this.boxshadowblur.value;
            this.boxshadowspread.value = secondHalf[3];
            this.boxshadowspreaddis.innerHTML = this.boxshadowspread.value;
            this.boxshadowcolor.value = `#${this.hex(firstHalf[0])}${this.hex(firstHalf[1])}${this.hex(firstHalf[2])}`;
            this.boxshadowopticity.value = this.valueorone(firstHalf[3]);

        }


    }
    // ============================================================================
    tagadder(array) {
        const htmlTags = [
            '', 'div', 'header', 'footer', 'main', 'section', 'article', 'aside', 'nav', 'h1', 'h2', 'h3',
            'h4', 'h5', 'h6',
            // 'address',
            'p', 'br', 'hr',
            //  'blockquote',
            'ol', 'ul', 'li',
            //  'dl', 'dt', 'dd', 'figure',
            // 'figcaption', 'pre', 'code', 
            'em', 'strong', 'small',
            // 'sub', 'sup', 
            'i',
            // 'b',
            // 'u', 'mark', 'del', 'ins', 
            'q',
            // 'cite', 'abbr',
            'span',
            //  'time', 'var', 'dfn',
            'a',
            //   'link'
            //   , 'area', 
            //   'nav',
            'img', 'audio', 'video',
            // 'source', 'track', 'picture', 'embed', 'object', 'param',
            // 'iframe', 'canvas', 
            'form', 'input', 'button', 'select', 'option', 'optgroup', 'textarea', 'label', 'table'

            // 'fieldset', 'legend', 'datalist', 'keygen', 'meter', 'progress', 'output', , 'caption', 'thead',
            // 'tbody', 'tfoot', 'tr', 'th', 'td', 'col', 'colgroup', 'article', 'section', 'header', 'footer', 'nav', 'main', 'aside', 'figure', 'figcaption',
        ];
        for (let i = 0; i < array.length; i++) {
            // let b = document.getElementById(array[i]);
            for (let j = 0; j < htmlTags.length; j++) {
                let a = document.createElement('option');
                a.value = htmlTags[j];
                a.innerText = htmlTags[j];
                array[i].appendChild(a);
            }
        }
    }
    // unit adder funtion ==============================================================================================================
    unitadder(array) {
        const units = ["", "auto", "px", "em", "rem", "%", "vw", "vh", "vmin", "vmax", "cm", "mm", "in", "pt", "pc", "ex", "ch", "deg", "rad", "grad", "turn", "s", "ms", "dpi", "dppx", "fr"
        ];

        for (let i = 0; i < array.length; i++) {

            // let b = document.getElementById(array[i]);
            for (let j = 0; j < units.length; j++) {
                let a = document.createElement('option');
                a.value = units[j];
                a.innerText = units[j];
                array[i].appendChild(a);

            }

        }
    }




}
// ==================================|''''  |\  |   |''\=============================================
// end class website ================|===   | \ |   |   |============================================
// ==================================|....  |  \|   |../=============================================


document.addEventListener("DOMContentLoaded", () => {
    // ========================start writing content form below\/========================================
    const board = document.querySelector('#board');
    const website = new Website();

    // =====================class call /\=========================================================

    const elements = document.querySelectorAll('*');
    function handleClick(event) {
        website.main_input.value = event.target.id;
    }
    let isCtrlPressed = false;

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && !isCtrlPressed) {
            isCtrlPressed = true;

            elements.forEach(element => {
                element.addEventListener('click', handleClick);
            });
        }
        // on off designer mode
        if (event.ctrlKey && event.key == "b") {
            if (document.designMode == "on") {
                document.designMode = "off"
            } else {

                document.designMode = "on"
            }
        }

    });
    document.addEventListener('keyup', function (event) {
        if (!event.ctrlKey && isCtrlPressed) {
            isCtrlPressed = false;

            elements.forEach(element => {
                element.removeEventListener('click', handleClick);
            });
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key == "q") {
            if (board.style.display != "none") {
                board.style.display = "none";
            } else {
                board.style.display = "block";
            }
        }
    });



    // ======================================end/\=========================================================
// };
});
