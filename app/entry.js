// Copyright (c) 2023 SpcFORK
window.dynamicFadeTLBR = (elements = [], mult = 100, fn = fadeIn) => {
  elements.map(async (_, i) => {
    requestAnimationFrame(async () => {
      await sleep(i * mult)
      await fn(_)
    })
  })
}

window.Main = class Main {

  static PageTitle = 'Guh'

  static async preload() {
    return When(
      _ => window.sushaRadix?.loaded,
      _ => { }
    )
  }


  constructor(entry, promise) {
    this.RadixRunner(entry, promise)
  }

  async RadixRunner(entry, promise) {
    this.entry = entry;
    this.promise = promise;

    await promise;

    this.run();
  }

  // ---

  centerX = visualViewport.width / 2;
  centerY = visualViewport.height / 2;
  center = [this.centerX, this.centerY];

  mainColor = '#A61C1C'

  gradientColors = [
    '#651111',
    '#7a1515',
    '#901818',
    '#a61c1c',
    '#bc2020',
    '#d22323',
    '#dc3232'
  ];

  centerStyle = {
    position: 'absolute',
    left: `${this.centerX}px`,
    top: `${this.centerY}px`,

    transform: 'translate(-50%, -50%)'
  };

  centerContentStyle = {
    'justify-content': 'center',
    'align-items': 'center',
    display: 'flex',
    'flex-direction': 'column'
  };

  middleContainer = section()
    .id$('middle-container')
    .style$({
      ...this.centerStyle,
      ...this.centerContentStyle,
      top: this.centerY - 70 + 'px',
      width: '300px',
      height: '500px',

    })

  hr1 = hr()
    .id$('hr1')
    .style$({
      'width': '300px',
      'filter': 'drop-shadow(0px 0px 2px #A61C1Cf0)',
      'border-color': this.mainColor + 'a0',
      ...this.centerStyle,
      top: this.centerY + 120 + 'px'
    })

  mainImg = img('img/Guhsite.png')
    .id$('main-img')
    .style$({
      'width': '400px',
      // 'height': '100px',
      'margin-top': '0px',
      'margin-bottom': '30px',

      // Add filter to image for glow effect
      'filter': 'drop-shadow(0px 0px 10px #A61C1Cef)'
    })

  buttonBar = div()
    .id$('button-bar')
    .style$({
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'space-evenly',
      'align-items': 'center',
      ...this.centerStyle,
      top: this.centerY + 80 + 'px',
      width: '600px',
    })

  makeButton = async (text, icon, onClick) => {
    await window.sushaRadix.loaded;

    let ico = await window.sushaRadix[icon]()

    let p_ = p(text)
    let b = button()
      .id$('button')
      .style$({
        'font-size': '18px',
        'text-align': 'center',
        'cursor': 'pointer',
        'transition': 'all 0.2s ease-in-out',
        'background-color': this.mainColor,
        'border-radius': '10px',
        'border': 'none',

        'filter': 'drop-shadow(0px 0px 10px #A61C1Cf0)'
      })
      .on$('click', e => onClick(e, p_, b, ico))
      .append$(
        ico
      )
      .append$(
        p_
      )

    this.buttonBar.append$(b)

    return {
      b,
      ico,
      p_
    }
  }

  p1 = p()
    .html$(`<i>
      <b>The best XBL Bot!!</b> <br />
      <b>Guhbottin'</b> since 2023. <b>Copyright</b> (c) ${new Date().getFullYear()} "Shwp", SpcFORK </i>`)
    .id$('p1')
    .style$({
      'font-size': '18px',
      'text-align': 'center',
      'color': '#1e1e1e',
      'margin-top': '10px',
      'margin-bottom': '10px',
      // 'font-weight': 'bold',

      ...this.centerStyle,
      top: this.centerY + 180 + 'px'
    })

  // ---

  commandCenter = section()
    .id$('command-center')
    .style$({
      ...this.centerStyle,
      ...this.centerContentStyle,
      width: '800px',
      height: '500px',
      'flex-wrap': 'wrap',
      'gap': '1em',
    })

  commandSidebar = div()
    .id$('command-sidebar')
    .style$({
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      gap: '0.5em',
      'float': 'left',
      'height': '100%',
      'width': '30%',
      'padding-right': '2em',
      'border-right': '1px solid ' + this.mainColor,
      overflowY: 'auto',
      overflowX: 'hidden',

    })

  commandTextHost = div()
    .id$('command-text-host')
    .style$({
      width: '50%',
      'float': 'right',
      height: '100%',
      'display': 'flex',
      'flex-direction': 'column',
      'align-content': 'space-evenly',
      'justify-content': 'center',
      gap: '0.5em',
    })

  floatingBackButton = button()
    .id$('floating-back-button')
    .style$({
      'position': 'absolute',
      'top': '0px',
      'left': '-35px',
      'width': '35px',
      'height': '35px',
      'border-radius': '50%',
      'background-color': this.mainColor,
      'border': 'none',
      'cursor': 'pointer',
      'transition': 'all 0.2s ease-in-out',
      'filter': 'drop-shadow(0px 0px 10px #A61C1Cf0)',
      ...this.centerContentStyle,
      opacity: '0.8',
    })

  async run() {

    {
      this.middleContainer
        .append$(this.mainImg)

      {
        let b1 = await this.makeButton('Discord', 'discord-logo', _ => {
          window.open('', '_blank')
        });

        b1.b.style$({
          padding: '0.7em',
          ...this.centerContentStyle,
          'flex-wrap': 'wrap',
          'flex-direction': 'row',
          'justify-content': 'space-evenly',
          'background-color': this.mainColor,
          width: '170px'
        })

        b1.p_.style$({
          // 'font-size': 'px',
          'text-align': 'center',
          // color: this.mainColor,
          'margin': '0px',
          'font-weight': 'bold',
          'filter': 'opacity(0.7) drop-shadow(0px 0px 1px #000)',
          'mix-blend-mode': 'overlay'
        })

        b1.ico.style$({
          'width': '25px',
          'height': '25px',
          color: this.mainColor,
          'background-blend-mode': 'overlay',
          'filter': 'opacity(0.3) drop-shadow(0px 0px 1px #000)',
        })
      }

      {
        let b2 = await this.makeButton('Invite', 'envelope-closed', _ => {
          window.open('https://discord.com/oauth2/authorize?client_id=1190183817609236500&scope=bot&permissions=8', '_blank')
        });

        b2.b.style$({
          padding: '0.7em',
          ...this.centerContentStyle,
          'flex-wrap': 'wrap',
          'flex-direction': 'row',
          'justify-content': 'space-evenly',
          'background-color': '#1c1c1c',
          'filter': 'drop-shadow(0px 0px 10px #1c1c1c)',
          width: '170px'
        })

        b2.p_.style$({
          // 'font-size': 'px',
          'text-align': 'center',
          color: '#fff',
          'margin': '0px',
          'font-weight': 'bold',
          'filter': 'drop-shadow(0px 0px 1px #fff)',
          'mix-blend-mode': 'overlay'
        })

        b2.ico.style$({
          'width': '25px',
          'height': '25px',
          color: this.mainColor,
          'background-blend-mode': 'overlay',
          'filter': 'opacity(0.2) drop-shadow(0px 0px 1px #fff9) invert(100%)',
        })
      }

      {
        let b3 = await this.makeButton('Docs', 'mix', async _ => {
          await Promise.all(
            [
              this.middleContainer.get$(),
              this.buttonBar.get$(),
              this.hr1.get$(),
              this.p1.get$()
            ].map(async (_, i) => {
              await sleep(i * 100)
              await fadeOut(_)
            })
          )

          await sleep(1e3)
          location.hash = '/docs'
        });

        b3.b.style$({
          padding: '0.7em',
          ...this.centerContentStyle,
          'flex-wrap': 'wrap',
          'flex-direction': 'row',
          'justify-content': 'space-evenly',
          'background-color': '#1c1c1c',
          'filter': 'drop-shadow(0px 0px 10px #1c1c1c)',
          width: '170px'
        })

        b3.p_.style$({
          // 'font-size': 'px',
          'text-align': 'center',
          color: '#fff',
          'margin': '0px',
          'font-weight': 'bold',
          'filter': 'drop-shadow(0px 0px 1px #fff)',
          'mix-blend-mode': 'overlay'
        })

        b3.ico.style$({
          'width': '25px',
          'height': '25px',
          color: this.mainColor,
          'background-blend-mode': 'overlay',
          'filter': 'opacity(0.2) drop-shadow(0px 0px 1px #fff9) invert(100%)',
        })
      }
    }

    var homeElements = [
      this.middleContainer.get$(),
      this.buttonBar.get$(),
      this.hr1.get$(),
      this.p1.get$()
    ]

    dynamicFadeTLBR(homeElements, 0, fadeOut)

    // ---

    {
      {

        this.floatingBackButton
          .append$(
            (await window.sushaRadix['arrow-left']())
              .style$({
                width: '25px',
                height: '25px',
                display: 'flex',
                'filter': 'drop-shadow(0px 0px 3px #0009)',
              })
          )
          .on$('click', async _ => {
            await dynamicFadeTLBR(
              [
                this.commandCenter.get$(),
                this.commandSidebar.get$(),
                this.commandTextHost.get$(),
                this.floatingBackButton.get$()
              ]
            )
            window.location.hash = ''
          })

        this.commandCenter
          .append$(this.commandSidebar)
          .append$(this.commandTextHost)
          .append$(this.floatingBackButton)

        dynamicFadeTLBR([this.commandCenter.get$()], 0, fadeOut)
      }

      let updateTextHost = async (headerML = '', textML = '', speedIn = 100, speedOut = 100) => {
        let currentOpacity = this.commandTextHost.get$().style.opacity

        if (currentOpacity > 0) {
          await fadeOut(this.commandTextHost.get$(), speedOut)
        }

        this.commandTextHost.get$().innerHTML = ''

        let
          header = section(headerML),
          text = section(textML)

        this.commandTextHost
          .append$(header)
          .append$(text)

        return await fadeIn(this.commandTextHost.get$(), speedIn)
      }

      let createCommand = async (command, ml) => {
        let
          textStyle = {

            'font-size': '1em',
            'margin': '0px',
            'padding': '0px',
            'text-align': 'center',
            'color': '#fff',
            'filter': 'opacity(0.7) drop-shadow(0px 0px 1px #fff)',
            'mix-blend-mode': 'overlay',
            'transiton': 'all 0.3s ease-in-out'

          },

          commandNameML = h2(command)
            .style$({
              'font-size': '1.2em',
              'font-weight': 'bold',
              'margin': '0px',
              'padding': '0px',
              'text-align': 'center',
              'color': this.mainColor,
              'filter': `drop-shadow(0px 0px 2px #f009)`,
            }),

          commandDescML = div(ml)
            .style$(textStyle)
          ,

          button_ = button()
            .style$({
              'font-size': '1em',
              'font-weight': 'bold',
              'margin': '0px',
              'padding': '0px',
              'text-align': 'center',
              'color': '#fff',
              'filter': 'drop-shadow(0px 0px 1px #000)',
              'mix-blend-mode': 'overlay',
              'background-color': 'transparent',
              'border': 'none',
              'outline': 'none',
              'cursor': 'pointer',
              'padding': '0.5em',

            })
            .id$('cbutton')
            .append$(commandNameML)
            .on$('click', async _ => {
              requestAnimationFrame(async _ => {
                let t = commandNameML
                  .style$(commandNameML.style)
                  .get$()
                  .cloneNode(true)


                await updateTextHost(
                  t, commandDescML, 15, 15
                )
              })
            })

        this.commandSidebar
          .append$(button_)
      }

      {
        var commands = await import_('app/commands.js', 'GUHcommands')
        var commandKeys = Object.keys(commands.GUHcommands)

        for (let command of commandKeys) {
          let cmd = commands.GUHcommands[command]
          await createCommand(cmd.command, cmd.description)
        }
      }
    }

    // ---

    const __ = router({
      "/": (r) => {
        sleep(1e3).then(_ => dynamicFadeTLBR(homeElements, 200))

        return div(...homeElements)
      },

      "/docs": (r) => {
        sleep(1.5e3).then(_ => dynamicFadeTLBR([this.commandCenter.get$()], 200))

        return div(this.commandCenter)
      }
    });

    this.entry.appendChild(__);

  }


}
