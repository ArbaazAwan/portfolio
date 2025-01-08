import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParallaxService {
  applyParallax(elem: HTMLElement) {
    // Add event listener
    window.addEventListener('mousemove', parallax);

    // Magic happens here
    function parallax(e: any) {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const _depth1 = `${70 - ((_mouseX - _w) * 0.01) / 2}% ${
        30 - ((_mouseY - _h) * 0.04) / 2
      }%`;
      const _depth2 = `${80 - (_mouseX - _w) * 0.002}% ${
        30 - (_mouseY - _h) * 0.002
      }%`;
      const _depth3 = `${80 - (_mouseX - _w) * 0.006}% ${
        30 - (_mouseY - _h) * 0.006
      }%`;
      const x = `${_depth1}, ${_depth2}, ${_depth3}`;
      elem.style.backgroundPosition = x;
    }
  }

  applyParallax1(elem: HTMLElement) {
    window.addEventListener('mousemove', parallax);

    // Magic happens here
    function parallax(e: any) {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const _depth1 = `${70 - ((_mouseX - _w) * 0.01) / 2}% ${
        30 - ((_mouseY - _h) * 0.04) / 2
      }%`;
      const _depth2 = `${80 - (_mouseX - _w) * 0.002}% ${
        30 - (_mouseY - _h) * 0.002
      }%`;
      const _depth3 = `${80 - (_mouseX - _w) * 0.006}% ${
        30 - (_mouseY - _h) * 0.006
      }%`;
      const x = `${_depth1}, ${_depth2}, ${_depth3}`;
      elem.style.left = `${90 + ((_mouseX - _w) * 0.006) / 2}%`;
      elem.style.top = `${90 + ((_mouseY - _h) * 0.006) / 2}%`;
    }
  }
}
