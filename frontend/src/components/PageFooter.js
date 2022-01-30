import React, { Component } from "react";

export default class PageFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer
        class="bg-black
                text-sm text-center
                border-t-4 border-indigo-400
                fixed
                inset-x-0
                bottom-0
                p-1
                divide-x divide-white-200"
                >
            <span class="pr-3 text-indigo-400">ACC4 PAN AFRICA COHORT</span>
            <span class="pl-3 text-indigo-400">PROJECT GROUP SIX</span>  
        </footer>
    )
  }
}