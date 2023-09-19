import React from 'react'
import Link from 'next/link'
import Animation from "../Animation";

export default function Footer() {
  return (
    <Animation animationType="fade-bottom" threshold={0}>
      <footer>
        <div className="py-8 text-center">
          <div className="text-gray-400 text-sm mr-4">
            &copy; Cruip.com. All rights reserved.
          </div>
        </div>
      </footer>
    </Animation>
  );
}
